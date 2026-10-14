import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import styles from './Accreditation.module.css';
import AccreditedEntity from '../components/ui/AccreditedEntity';

function Accreditation() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <section className={styles.summarySection}>
                    <div className={styles.container}>
                        <div className={styles.accreditBanner}>
                            <div className={styles.accreditIcon}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    <polyline points="9 12 11 14 15 10" stroke="#10b981" strokeWidth="2"/>
                                </svg>
                            </div>
                            <div className={styles.accreditInfo}>
                                <p>
                                    <b>Испытательный центр ФГБОУ ВО «КубГТУ»</b> аккредитован в национальной системе
                                    аккредитации в качестве испытательной лаборатории. Уникальный номер записи
                                    в реестре аккредитованных лиц <AccreditedEntity />
                                </p>
                                <p>
                                    Состоит в реестре испытательных лабораторий, уполномоченных осуществлять
                                    оценку продукции в рамках Таможенного союза.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.documentSection}>
                    <div className={styles.container}>
                        <div className={styles.imageWrapper}>
                            <a
                                href="/images/accreditation/accredited_entity.png"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.imageLink}
                            >
                                <img
                                    src="/images/accreditation/accredited_entity.png"
                                    alt="Аттестат аккредитации RA.RU.21КБ38"
                                    className={styles.image}
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Accreditation;
