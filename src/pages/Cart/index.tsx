
import { Link } from "react-router-dom";
import styles from "./cart.module.scss";
import { Button } from "../../components/ui/Button";
import { CloseOutlined } from "@ant-design/icons";
import { useGlobalContext } from "../../context/global";
import useFormatter from "../../hooks/integrations/utils/use-formatter";

function Cart() {

    const { cart, removeFromCart } = useGlobalContext();

    const { formatMoney } = useFormatter();

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const formattedTotal = formatMoney(total);

    const emptyCart = Boolean(!cart.length);

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
                        {cart.map((product) =>(

                            <div className={styles.cartItem}>
                            <Link to={`/product/${product.id}`} className={styles.productInfo}>
                                <img src={product.imageUrl} alt={product.title}/>

                                <div>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <span className={styles.price}>{formatMoney(product.price)}</span>
                                </div>
                            </Link>
                            <button className={styles.removeButton} onClick={() => removeFromCart(product.id)}><CloseOutlined /></button>
                        </div>
                        ))}
                    </div>
                    <div className={styles.summary}>
                        <h2>Resumo do Pedido</h2>
                        <div className={styles.summaryContent}>
                            <div className={styles.summaryItem}>
                                <span>Sub total</span>
                                <span>{formattedTotal}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>
                            <div className={styles.summaryTotal}>
                                <span>Total</span>
                                <span>{formattedTotal}</span>
                            </div>

                            <Link to="/success">
                                <Button fullWidth>Finalizar Compra</Button>
                            </Link>

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
