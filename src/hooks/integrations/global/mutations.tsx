import { useQuery } from "@tanstack/react-query";
import { GLOBAL_KEYS } from "./keys";
import { api } from "../../../api";
import type { ProductResponse } from "../../../types/ProductType";

export const useGetProducts = () => {
  return useQuery<ProductResponse[], Error>({
    queryKey: GLOBAL_KEYS.useGetProducts(),
    queryFn: () => api.get<ProductResponse[]>("/products"),
    retry: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
