import { ShoppingCartOutlined } from "@ant-design/icons";
import style from "./header.module.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={style.container}>
            <Link to="/">
                <strong>E-Commerce</strong>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart" className={style.cartLink}>
                    <span>Carrinho</span>

                    <div className={style.cartIconContainer}>
                        <ShoppingCartOutlined  />

                        <span className={style.cartBadge}>1</span>
                    </div>
                </Link>
            </nav>
        </header>
    )
}

export default Header