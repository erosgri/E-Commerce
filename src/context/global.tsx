import constate from "constate";
import { useAddCheckout, useGetProducts } from "../hooks/integrations/global/mutations"
import { useEffect, useState } from "react";
import type { Product } from "../types/ProductType";
import { useCustomLocalStorage } from "../hooks/integrations/utils/use-custom-local-storage";
import type { CheckoutResponse } from "../types/CheckoutType";

function useGlobal(){
    const { data: products } = useGetProducts();
    const {mutateAsync: useAddCheckoutAsync, data: dataCheckout} = useAddCheckout();

    const [cart, setCart, removeCart] = useCustomLocalStorage<Product[]> (
        "cart",
        []
    );

    const [productList, setProductList] = useState<Product[]>([]);
    const [saleResume, setSaleResume] = useState<CheckoutResponse | null>(null);

    

    useEffect(() => {

        if(products) {
            const productsWithCartStatus = products.map((product) =>({
                ...product,
                isInCart: cart.some((cartItem: {id: string}) => cartItem.id === product.id),
            }));

            setProductList(productsWithCartStatus);
        }

    },[products, cart]);

    function addToCart(productId: string) {
        const product = productList.find((p) => p.id === productId);

        if(product) {
            setCart([...cart, product]);
            setProductList(
                productList.map((product) => 
                    product.id === productId ? {...product, isInCart: true } : product
                )
            );
        }
    }

    function removeFromCart(productId: string) {
        setCart(cart.filter((p: {id: string}) => p.id !== productId));
        setProductList(
            productList.map((product) => 
                product.id === productId ? {...product, isInCart: false} : product
            )
        );
    }

    async function addCheckout() {
        await useAddCheckoutAsync(cart)
        
    }

    useEffect(() => {

        if(dataCheckout){
            setSaleResume(dataCheckout);
            removeCart();
        }

    },[dataCheckout])



    return {
        products,
        productList,
        cart,
        addToCart,
        removeFromCart,
        addCheckout,
        saleResume,
    };
}

export const [GlobalProvaider, useGlobalContext] = constate(useGlobal);