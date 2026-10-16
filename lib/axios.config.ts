/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const baseURL = "http://127.0.0.1:8000/v1/";

const api = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor: attach access token
api.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let failedQueue: {
  resolve: (value: unknown) => void;
  reject: (reason?: any) => void;
}[] = [];

const processQueue = (error: unknown, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    // Only handle 401, and only once per request
    if (status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // Don't try to refresh the refresh call itself (prevents loop)
    if (originalRequest.url?.includes("/auth/refresh")) {
      // Refresh failed — force logout
      handleLogout();
      return Promise.reject(error);
    }

    // If already refreshing, queue this request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        })
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refreshToken = Cookies.get("refresh_token");
      if (!refreshToken) {
        throw new Error("No refresh token");
      }

      const { data } = await axios.post(
        `${baseURL}auth/refresh`,
        { refreshToken },
        { headers: { "Content-Type": "application/json" } }
      );

      const newAccessToken =
        data.session.access_token || data.session.accessToken;
      const newRefreshToken =
        data.session.refresh_token || data.session.refreshToken;

      Cookies.set("access_token", newAccessToken);
      if (newRefreshToken) {
        Cookies.set("refresh_token", newRefreshToken); // rotation support [citation:5][citation:8]
      }

      api.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      processQueue(null, newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      handleLogout();
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

function handleLogout() {
  toast.error("User session timed out");
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  Cookies.remove("user_role");
  window.location.href = "/auth/login";
}

export default api;
