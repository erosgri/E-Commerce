import { CheckCircleOutlined, HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./success.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useGlobalContext } from "../../context/global";
import useFormatter from "../../hooks/integrations/utils/use-formatter";
function Success() {

    const { saleResume } = useGlobalContext();

    const { formatMoney } = useFormatter();

    const total = saleResume?.products.reduce((acc, item) => acc + item.price, 0) ?? 0;

    const formattedTotal = formatMoney(total);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <CheckCircleOutlined className={styles.icon} />
                <h1>Pagamento Confirmado</h1>
                <p>Obrigado por Comprar conosco</p>

                <div className={styles.orderInfo}>
                    <h2>Resumo do Pedido</h2>

                    <div className={styles.items}>
                        {saleResume?.products.map((product) => (

                            <div className={styles.item} key={product.id}>

                                <img src={product.imageUrl} alt={product.title} />
                                <div className={styles.info}>
                                    <h3>{product.title}</h3>
                                    <span>{formatMoney(product.price)}</span>
                                </div>
                            </div>

                        ))}

                    </div>
                    <div className={styles.total}>
                        <strong>Total:</strong>
                        <strong>{formattedTotal}</strong>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link to="/">
                        <Button >
                            <HomeOutlined />
                            Voltar para Home
                        </Button>
                    </Link>
                    <Link to="/cart">
                        <Button variant="secundary" >
                            <ShoppingCartOutlined />
                            Voltar para o carrinho
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Success