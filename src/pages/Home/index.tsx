import { ProductCard } from "../../components/ProductCard";
import style from './home.module.scss';
function Home() {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <h1>E-commerce Developer</h1>
            </div>

            <div className={style.products}>
                <ProductCard
                    description="Camiseta casual para o dia a dia"
                    imageUrl="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg"
                    price={499.99}
                    title="Camiseta Nike"
                    id="1"
                    isInCart
                    
                />
                <ProductCard
                    description="Tênis Air Jordan 1 Low Masculino"
                    imageUrl="https://imgnike-a.akamaihd.net/1920x1920/0165105CA8.jpg"
                    price={1459.35}
                    title="Nike Air Jordan"
                    id="1"
                    //isInCart
                />
                <ProductCard
                    description="Camiseta Nike LeBron James Los Angeles Lakers Masculina"
                    imageUrl="https://imgnike-a.akamaihd.net/1920x1920/058517NDA7.jpg"
                    price={200}
                    title="Camiseta Nike L.A Lakers"
                    id="1"
                    isInCart
                />
                <ProductCard
                    description="Tênis Causal"
                    imageUrl="https://imgnike-a.akamaihd.net/360x360/097581IEA1.jpg"
                    price={1199.99}
                    title="Nike Shox R4"
                    id="1"
                    //isInCart
                />
            </div>  
        </div>
        
    )
}


export default Home