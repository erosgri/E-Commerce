import { CheckCircleOutlined, HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./success.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
function Success() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <CheckCircleOutlined className={styles.icon} />
                <h1>Pagamento Confirmado</h1>
                <p>Obrigado por Comprar conosco</p>

                <div className={styles.orderInfo}>
                    <h2>Resumo do Pedido</h2>

                    <div className={styles.items}>
                        <div className={styles.item}>

                            <img src="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg" alt="camiseta nike" />
                            <div className={styles.info}>
                                <h3>Camiseta Nike</h3>
                                <span>R$499,99</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.total}>
                        <strong>Total:</strong>
                        <strong>R$499,99</strong>
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