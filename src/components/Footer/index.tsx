import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <strong>E-Commerce Desenvolvido por Eros Grigolli Junior</strong>
                <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}