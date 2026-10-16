import api from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (filters: ProductFilterParams = {}) => {
  const { search, category, page } = filters;

  return useQuery<PaginatedResponse<Product>>({
    queryKey: ["products", filters],
    queryFn: async () => {
      const params = new URLSearchParams();

      if (page) params.append("page", page.toString());
      if (search) params.append("search", search);
      if (category) params.append("category", category);
      //   const response = await api.get(`/products`);
      const response = await api.get(`/products?${params.toString()}`);
      return response.data;
    },
  });
};
export const useGetCategories = (filters: CategoryFilterParams = {}) => {
  const { name } = filters;

  return useQuery<PaginatedResponse<Product>>({
    queryKey: ["categories", filters],
    queryFn: async () => {
      const params = new URLSearchParams();

      //   if (page) params.append("page", page.toString());
      //   if (search) params.append("search", search);
      if (name) params.append("name", name);

      const response = await api.get(`/categories?${params.toString()}`);
      return response.data;
    },
  });
};
