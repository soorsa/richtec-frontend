import api from "@/lib/axios.config";
import { normalizeDRFErrors, toastDRFErrors } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CategoryPayload): Promise<Category> => {
      const formData = new FormData();

      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          formData.append(key, value);
        }
      });

      const res = await api.post(`/categories`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      toast.success("New category created");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        toastDRFErrors(normalizeDRFErrors(error.response.data));
      } else {
        toast.error(`Failed - ${error.message}`);
      }
    },
  });
};
export const usePatchCategory = (slug: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CategoryPayload): Promise<Category> => {
      const formData = new FormData();

      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          formData.append(key, value);
        }
      });

      const res = await api.patch(`/categories/${slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      toast.success("Updated category");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        toastDRFErrors(normalizeDRFErrors(error.response.data));
      } else {
        toast.error(`Failed - ${error.message}`);
      }
    },
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: ProductPayload): Promise<Product> => {
      const formData = new FormData();

      Object.entries(payload).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") return;

        // so guard against a single File)

        if (Array.isArray(value)) {
          // File[] — append each file with the same key
          if (value.length > 0 && value[0] instanceof File) {
            value.forEach((f) => formData.append(key, f));
            return;
          }
          // everything else (e.g. features: string[]) → JSON-encoded for DRF JSONField
          formData.append(key, JSON.stringify(value));
          return;
        }
        if (value instanceof File) {
          formData.append(key, value);
          return;
        }

        formData.append(key, String(value));
      });

      const res = await api.post(`/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      toast.success("New product created");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        toastDRFErrors(normalizeDRFErrors(error.response.data));
      } else {
        toast.error(`Failed - ${error.message}`);
      }
    },
  });
};
