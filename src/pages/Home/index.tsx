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
                <ProductCard 
                description="Camiseta casual para o dia a dia" 
                imageUrl="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg" 
                price={499.99}
                title="Camiseta Nike"
                id="1"
                />
            </div>
        </div>
    )
}

export default Home