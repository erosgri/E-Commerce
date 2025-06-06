
import styles from './product-card.module.scss'
export function ProductCard() {
    return <div className={styles.productCard}>
        <img src="https://imgcentauro-a.akamaihd.net/1200x1200/93476131A3.jpg"
            alt="camiseta"
            className={styles.productImage}
        />
        <div className={styles.productInfo}>
            <div className={styles.content}>
                <h2>Camiseta Nike</h2>
                <p>Descrição do Produto</p>
                <span className={styles.price}>Preço R$: 499,99</span>
            </div>
            <button>Adicionar ao carrinho</button>
        </div>
    </div>

}