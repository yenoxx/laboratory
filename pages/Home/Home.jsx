import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import HeroBanner from '../components/ui/HeroBanner';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <HeroBanner />
            </main>
            <Footer />
        </>
    );
}

export default Home;
