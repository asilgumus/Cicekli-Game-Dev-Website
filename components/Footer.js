"use client";

import React from 'react';
import { Twitter, Github, Instagram } from 'lucide-react';
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
                        <a href="https://www.linkedin.com/company/cicekli-gamedev/" className={styles.socialLink} aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                        <a href="https://github.com/Cicekli-GameDev" className={styles.socialLink} aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://www.instagram.com/cicekli_gamedev/" className={styles.socialLink} aria-label="Instagram">
                            <Instagram size={24} />
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
