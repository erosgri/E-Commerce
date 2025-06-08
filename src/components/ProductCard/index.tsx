import { Button } from '../ui/Button';
import styles from './product-card.module.scss';
import { CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons'

interface ProductCardProps {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    isInCart?: boolean;
}

export function ProductCard({
    description,
    imageUrl,
    price,
    title,
    isInCart
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
            </div> <Button variant={isInCart ? "danger" : "primary"}>

                {isInCart ? <><CloseOutlined /> Remover do Carrinho </> : <> <ShoppingCartOutlined /> Adicionar ao Carrinho </> }

            </Button>

        </div>
    </div>

}