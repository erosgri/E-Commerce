import Footer from "../../components/Footer";
import Header from "../../components/Header";
import style from "./product.module.scss";
function Product() {
    return (
        <div className={style.container}>
            <Header/>
            <h1>Product</h1>
            <Footer/>
        </div>
    )
}

export default Product