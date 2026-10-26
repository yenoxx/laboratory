import { useState } from 'react';
import styles from '../styles/Gallery.module.css';

export default function Gallery({ images, height = 400 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.galleryWrapper}>
            <div className={styles.gallery} style={{ height }}>
                {/* All images stacked; only the active one is visible (fade) */}
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Слайд ${index + 1}`}
                        className={`${styles.galleryImage} ${index === currentIndex ? styles.active : ''}`}
                        style={{ transitionDuration: `250ms` }}
                    />
                ))}

                {/* Left Arrow */}
                <button
                    className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`}
                    onClick={goToPrev}
                    aria-label="<"
                >
                    &#10094;
                </button>

                {/* Right Arrow */}
                <button
                    className={`${styles.galleryArrow} ${styles.galleryArrowRight}`}
                    onClick={goToNext}
                    aria-label=">"
                >
                    &#10095;
                </button>
            </div>

            {/* Dots */}
            <div className={styles.galleryDots}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.galleryDot} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => goToIndex(index)}
                        aria-label={`#${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}