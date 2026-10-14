import { Link } from 'react-router-dom';
import AccreditedEntity from './AccreditedEntity';
import styles from '../styles/HeroBanner.module.css';

function HeroBanner() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.accreditBanner}>
                    <div className={styles.accreditIcon}>
                        <img
                            src="/images/accreditation/accredit_icon.png"
                            alt=""
                            className={styles.accreditImage}
                        />
                    </div>
                    <span className={styles.accreditText}>
                        Уникальный номер записи в реестре аккредитованных лиц:&nbsp;<AccreditedEntity />
                    </span>
                </div>
                <h1 className={styles.title}>
                    Испытательный центр<br />
                    ФГБОУ ВО<br />
                    Кубанский государственный<br />
                    технологический университет
                </h1>
                <div className={styles.actions}>
                    <Link to="/services" className={styles.btnPrimary}>Наши услуги</Link>
                    <Link to="/contacts" className={styles.btnSecondary}>Связаться с нами</Link>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100+</span>
                        <span className={styles.statLabel}>предприятий-заказчиков</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>60+</span>
                        <span className={styles.statLabel}>видов экспертиз</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>3</span>
                        <span className={styles.statLabel}>лаборатории</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
