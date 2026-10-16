import api from "@/lib/axios.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: LoginPayload): Promise<LoginResponse> => {
      const res = await api.post(`/auth/login`, payload);
      return res.data;
    },
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      Cookies.set("access_token", data.token, {
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
    onError: (error: AxiosError<LoginError>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        if (errorData.non_field_errors) {
          const errorMessage = errorData.non_field_errors;
          toast.error(errorMessage);
        }
        if (errorData.detail) {
          const errorMessage = errorData.detail;

          toast.error(errorMessage);
        }
      } else {
        toast.error("Login Failed");
      }
    },
  });
};
