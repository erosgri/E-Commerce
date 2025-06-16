import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "../../components/ui/Button";
import styles from "./product.module.scss";
import { ProductCard } from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/global";
import useFormatter from "../../hooks/integrations/utils/use-formatter";


export default function Product() {

    const { id } = useParams();

    const { productList, addToCart, removeFromCart } = useGlobalContext();

    const currentProduct = productList.find((product) => product.id === id);

    const relatedProducts = productList.filter((p) => p.id !== id).slice(0, 3);

    const { formatMoney } = useFormatter();

    function handleCartAction() {
        if (!currentProduct) return;
        4
        if (currentProduct.isInCart) {
            removeFromCart(currentProduct.id);
            return;
        }
        addToCart(currentProduct.id);
    }

    const isInCart = currentProduct?.isInCart;



    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <div className={styles.imageContainer}>
                    <img src={currentProduct?.imageUrl} alt={currentProduct?.title} />
                </div>

                <div className={styles.info}>
                    <h1>{currentProduct?.title}</h1>
                    <p className={styles.description}>{currentProduct?.description}</p>
                    <span className={styles.price}>{formatMoney(currentProduct?.price ?? 0)}</span>

                    <div className={styles.details}>
                        <h2>Descrição</h2>
                        <p>{currentProduct?.deteiledDescription}</p>
                        <ul>
                            <li>Garantia de 12 meses</li>
                            <li>Frete Grátis</li>
                            <li>Produto original licenciado</li>
                        </ul>
                    </div>

                    <div className={styles.actions}>
                        <Button variant={isInCart ? "danger" : "primary"} onClick={handleCartAction}>
                            {isInCart ? (
                                <>
                                    <CloseOutlined /> Remover do Carrinho
                                </>
                            ) : (
                                <>
                                    <ShoppingCartOutlined /> Adicionar ao Carrinho
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.relatedProducts}>
                <h2>Produtos Relacionados</h2>
                <div className={styles.carousel}>
                    {relatedProducts.map((product) => (
                        <ProductCard
                            description={product.description}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            title={product.title}
                            id={product.id}
                            key={product.id}
                            isInCart={product.isInCart}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}
