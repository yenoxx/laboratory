import { Link } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import HeroBanner from '../components/ui/HeroBanner';
import AccreditedEntity from '../components/ui/AccreditedEntity';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <HeroBanner />

                <section className={styles.aboutSection}>
                    <div className={styles.container}>
                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutContent}>
                                <span className={styles.sectionTag}>О центре</span>
                                <h2 className={styles.sectionTitle}>Испытательный центр ФГБОУ&nbsp;ВО&nbsp;«КубГТУ»</h2>
                                <p className={styles.aboutText}>
                                    Испытательный центр является структурным подразделением 
                                    ФГБОУ ВО «Кубанский государственный технологический университет».
                                </p>
                                <p className={styles.aboutText}>
                                    Аккредитован  в национальной системе аккредитации в качестве испытательной лаборатории.
                                    Уникальный номер записи в реестре аккредитованных лиц&nbsp;<AccreditedEntity />
                                    &nbsp;от 03.06.2016 г.
                                    Состоит в реестре испытательных лабораторий, уполномоченных осуществлять оценку 
                                    продукции в рамках технических регламентов Таможенного союза.
                                </p>
                                <p className={styles.aboutText}>
                                    <b>Штат укомплектован</b> высококвалифицированными специалистами обладающими теоретическими знаниями 
                                    и практическим опытом в области испытаний,  научных исследований и экспертиз. 
                                </p>
                                <p className={styles.aboutText}>
                                    Испытания проводятся, как с использованием стандартизованных методов, так и с постановкой и 
                                    валидацией эксклюзивных методов анализа.
                                </p>
                                <p className={styles.aboutText}>
                                    В реестре постоянных заказчиков более 100 крупнейших предприятий пищевой и перерабатывающей 
                                    промышленности РФ.
                                </p>
                                <p className={styles.aboutText}>
                                    Ежегодно проводится более 60 экспертиз, в том числе судебных, по вопросам идентификации и 
                                    принятия классификационных решений,  спорным вопросам оценки качества, безопасности и причин 
                                    повреждений товаров.
                                </p>
                                <Link to="/about" className={styles.btnPrimary}>
                                    Подробнее о нас
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                        <polyline points="12 5 19 12 12 19"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className={styles.aboutImages}>
                                <div className={styles.aboutImageBlock}>
                                    <img
                                        src="/images/team/team.jpg"
                                        alt="Фото коллектива испытательного центра"
                                        className={styles.aboutImage}
                                    />
                                    <span className={styles.imageCaption}>Коллектив испытательного центра</span>
                                </div>
                                <div className={styles.aboutImageBlock}>
                                    <img
                                        src="/images/lab/lab5.jpg"
                                        alt="Фото из лаборатории"
                                        className={styles.aboutImage}
                                    />
                                    <span className={styles.imageCaption}>Фото из лаборатории</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
