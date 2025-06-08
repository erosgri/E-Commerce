import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './main-layout.module.scss';

export default function MainLayout(){
    return <div className={styles.container}>
        <Header />
        <div className={styles.content}>
            <Outlet />
        </div>
        <Footer />
    </div>
};