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
                        {/*
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            <polyline points="9 12 11 14 15 10" stroke="#10b981" strokeWidth="2"/>
                        </svg>
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.142 61.584c16.935 0 30.74-13.806 30.74-30.737C61.883 13.917 48.078.1 31.143.1 14.212.1.398 13.917.398 30.847s13.814 30.737 30.744 30.737z" fill="#e40046"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.374 47.247a6.041 6.041 0 01-6.035 6.038 6.041 6.041 0 01-6.036-6.038 6.03 6.03 0 016.036-6.032 6.03 6.03 0 016.035 6.032zM30.195 44.68s-8.717-2.941-8.717-6.228v-.012l17.439-7.937v7.949c0 3.287-8.722 6.228-8.722 6.228zm18.58-28.688a32.91 32.91 0 00-18.58-5.708 32.906 32.906 0 00-18.574 5.708c-.356.243-1.038.736-1.038.736v5.391c2.552 2.518 8.957 4.283 10.895 4.283v-5.37c2.65-1.221 5.597-2.143 8.717-2.143s6.067.922 8.722 2.144L10.583 33.93c0 14.789 19.612 19.354 19.612 19.354s19.611-4.565 19.611-19.354l.006-17.203s-.688-.493-1.038-.736z" fill="#ffffff"></path>
                        </svg>
                        */}
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
