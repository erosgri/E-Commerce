import type { Product } from "../../../types/ProductType";

export const GLOBAL_KEYS = {
    useGetProducts: () => ["useGetProducts"],
    useAddCheckout: (value: Product[]) => ["useAddCheckout", value],
}as const;