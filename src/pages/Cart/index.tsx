
import { Link } from "react-router-dom";
import styles from "./cart.module.scss";
import { Button } from "../../components/ui/Button";
import { CloseOutlined } from "@ant-design/icons";

function Cart() {
    const emptyCart = false;

    return (
        <div className={styles.container}>
            <h1>Carrinho de compras</h1>

            {emptyCart ? (
                <div className={styles.emptyCart}>
                    <p>Seu carrinho está vazio</p>
                    <Link to="/">
                        <Button>Continuar Comprando</Button>
                    </Link>
                </div>
            ) : (
                <div className={styles.content}>
                    <div className={styles.cartItems}>
                        <div className={styles.cartItem}>
                            <Link to="/product/1" className={styles.productInfo}>
                                <img src="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg" alt="product" />

                                <div>
                                    <h3>Camiseta Nike</h3>
                                    <p>Camiseta para o dia a dia</p>
                                    <span className={styles.price}>R$499,99</span>
                                </div>
                            </Link>
                            <button className={styles.removeButton}><CloseOutlined /></button>
                        </div>
                        <div className={styles.cartItem}>
                            <Link to="/product/1" className={styles.productInfo}>
                                <img src="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg" alt="product" />

                                <div>
                                    <h3>Camiseta Nike</h3>
                                    <p>Camiseta para o dia a dia</p>
                                    <span className={styles.price}>R$499,99</span>
                                </div>
                            </Link>
                            <button className={styles.removeButton}><CloseOutlined /></button>
                        </div>
                        <div className={styles.cartItem}>
                            <Link to="/product/1" className={styles.productInfo}>
                                <img src="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg" alt="product" />

                                <div>
                                    <h3>Camiseta Nike</h3>
                                    <p>Camiseta para o dia a dia</p>
                                    <span className={styles.price}>R$499,99</span>
                                </div>
                            </Link>
                            <button className={styles.removeButton}><CloseOutlined /></button>
                        </div>
                    </div>
                    <div className={styles.summary}>
                        <h2>Resumo do Pedido</h2>
                        <div className={styles.summaryContent}>
                            <div className={styles.summaryItem}>
                                <span>Subtotal</span>
                                <span>499,99</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>
                            <div className={styles.summaryTotal}>
                                <span>Total</span>
                                <span>499,99</span>
                            </div>


                            <Button fullWidth>Finalizar Compra</Button>

                            <Link to="/">
                                <Button variant="secundary" fullWidth>Continuar Comprando</Button>
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
