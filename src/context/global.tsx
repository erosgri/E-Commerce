import constate from "constate";
import { useGetProducts } from "../hooks/integrations/global/mutations"

function useGlobal(){
    const { data: products } = useGetProducts();

    return {
        products
    }
}

export const [GlobalProvaider, useGlobalContesxt] = constate(useGlobal);