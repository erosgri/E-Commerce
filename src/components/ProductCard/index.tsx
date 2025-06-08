import styles from './product-card.module.scss';

interface ProductCardProps {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

export function ProductCard({
    description,
    imageUrl,
    price,
    title,
}: ProductCardProps) {
    return <div className={styles.productCard}>
        <img src={imageUrl}
            alt={title}
            className={styles.productImage}
        />
        <div className={styles.productInfo}>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <span className={styles.price}>
                    {price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </span>
            </div>
            <button>Adicionar ao carrinho</button>
        </div>
    </div>

}