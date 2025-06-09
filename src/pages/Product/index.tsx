import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "../../components/ui/Button";
import styles from "./product.module.scss";
import { ProductCard } from "../../components/ProductCard";
export default function Product() {
    const isInCart = false;

    return (
        <>
            <div className={styles.product}>
                <div className={styles.imageContainer}>
                    <img src="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg" alt="produto" />
                </div>

                <div className={styles.info}>
                    <h1>Camiseta Nike</h1>
                    <p className={styles.description}>Camiseta do dia a dia</p>
                    <span className={styles.price}>R$499,99</span>

                    <div className={styles.details}>
                        <h2>Descrição</h2>
                        <p>Descrição detalhada do produto</p>
                        <ul>
                            <li>Garantia de 12 meses</li>
                            <li>Frete Grátis</li>
                            <li>Produto original licenciado ©Nike</li>
                        </ul>
                    </div>

                    <div className={styles.actions}>
                        <Button variant={isInCart ? "danger" : "primary"}>
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
                    <ProductCard
                        description="Camiseta casual para o dia a dia"
                        imageUrl="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg"
                        price={499.99}
                        title="Camiseta Nike"
                        id="1"
                        isInCart
                    />
                    <ProductCard
                        description="Camiseta casual para o dia a dia"
                        imageUrl="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg"
                        price={499.99}
                        title="Camiseta Nike"
                        id="1"
                        isInCart
                    />
                    <ProductCard
                        description="Camiseta casual para o dia a dia"
                        imageUrl="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg"
                        price={499.99}
                        title="Camiseta Nike"
                        id="1"
                    />
                </div>
            </div>
        </>
    );
}
