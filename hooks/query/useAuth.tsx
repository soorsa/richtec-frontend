import api from "@/lib/axios.config";
import { normalizeDRFErrors, toastDRFErrors } from "@/lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: LoginPayload): Promise<LoginResponse> => {
      const res = await api.post(`/auth/signin/`, payload);
      return res.data;
    },
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      Cookies.set("access_token", data.access_token, {
        expires: 34000,
        secure: true,
        // sameSite: "Strict",
      });
      Cookies.set("refresh_token", data.refresh_token, {
        secure: true,
        // sameSite: "Strict",
      });
      Cookies.set("user_role", data.user.role, {
        secure: true,
      });
      toast.success("Logged in successfully");
      router.push("/admin/dashboard");
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        toastDRFErrors(normalizeDRFErrors(error.response.data));
      } else {
        toast.error("Network error — please try again");
      }
    },
  });
};

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: RegisterPayload): Promise<LoginResponse> => {
      const res = await api.post(`/auth/signup/`, payload);
      return res.data;
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(
        `Account created Successfully for ${response.user.first_name}`
      );
      Cookies.set("access_token", response.access_token, {
        expires: 34000,
        secure: true,
        // sameSite: "Strict",
      });
      Cookies.set("refresh_token", response.refresh_token, {
        secure: true,
        // sameSite: "Strict",
      });
      Cookies.set("user_role", response.user.role, {
        secure: true,
      });
      router.push("/admin/dashboard");
    },
    onError: (error: AxiosError<RegisterError>) => {
      if (error.response?.data) {
        const errorData = error.response.data;
        toastDRFErrors(normalizeDRFErrors(errorData));

        // Object.values(errorData).forEach((messages) => {
        //   if (Array.isArray(messages)) {
        //     messages.forEach((message) => {
        //       toast.error(message);
        //     });
        //   }
        // });
      } else {
        toast.error("Registration Failed!");
      }
    },
  });
};

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async () => {
      const res = await api.post(`/auth/logout/`);
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("User logged out");
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      Cookies.remove("user_role");
      Cookies.remove("user_id");
      router.refresh();
    },
    onError: (error) => {
      // Check if this is an Axios error with response data
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Failed to log out");
      }
    },
  });
};

export const useGetMyDetails = () => {
  const token = Cookies.get("access_token");
  const response = useQuery<User>({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get("/auth/profile/");
      return res.data;
    },
    enabled: !!token,
  });
  useEffect(() => {
    if (response.data) {
      const user = response.data;
      Cookies.set("user_id", String(user.id));
      Cookies.set("role", String(user.role));
    }
  }, [response.data]);

  return response;
};
