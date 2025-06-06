import style from "./home.module.scss";
import Header from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
function Home() {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.banner}>
                <h1>E-commerce Developer</h1>
            </div>

            <div>
                <ProductCard />
            </div>
        </div>
    )
}

export default Home