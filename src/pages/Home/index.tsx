import { ProductCard } from "../../components/ProductCard";
import { useGlobalContesxt } from "../../context/global";
import style from './home.module.scss';
function Home() {

    const { products } = useGlobalContesxt();

    return (
        <div className={style.container}>
            <div className={style.banner}>
                <h1>E-commerce Developer</h1>
            </div>

            <div className={style.products}>

                {products?.map((product) => (

                    <ProductCard
                        description={product.description}
                        imageUrl={product.imageUrl}
                        price={product.price}
                        title={product.title}
                        id={product.id}
                        isInCart

                    />

                ))}

            </div>
        </div>

    )
}


export default Home