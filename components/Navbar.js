"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Gamepad2 } from 'lucide-react';
import styles from './Navbar.module.css';
import Button from './Button';
import { useTranslation } from '@/hooks/useTranslation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Gamepad2 size={32} className={styles.logoIcon} />
                    <span>Çiçekli Game Dev</span>
                </Link>

                <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
                    <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>{t('nav.about')}</Link>
                    <Link href="/events" className={styles.link} onClick={() => setIsOpen(false)}>{t('nav.events')}</Link>
                    <Link href="/blog" className={styles.link} onClick={() => setIsOpen(false)}>{t('nav.blog')}</Link>
                    <Link href="/announcements" className={styles.link} onClick={() => setIsOpen(false)}>{t('nav.announcements')}</Link>
                    <div className={styles.mobileCta}>
                        <Link href="/events">
                            <Button variant="primary">{t('nav.joinJam')}</Button>
                        </Link>
                    </div>
                </div>

                <div className={styles.desktopCta}>
                    <Link href="/events">
                        <Button variant="primary">{t('nav.joinJam')}</Button>
                    </Link>
                </div>

                <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
