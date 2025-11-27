import React from 'react';
import { Twitter, Github, Disc } from 'lucide-react';
import styles from './Footer.module.css';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>Çiçekli Game Dev</h3>
                        <p>{t('footer.tagline')}</p>
                    </div>

                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Discord">
                            <Disc size={24} />
                        </a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Çiçekli Game Dev. {t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
