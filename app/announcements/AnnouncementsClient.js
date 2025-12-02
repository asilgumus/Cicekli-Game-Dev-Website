"use client";

import React from 'react';
import styles from './page.module.css';
import { Megaphone } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function AnnouncementsClient({ announcements }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('pages.announcementsTitle')}</h1>
                <p className={styles.subtitle}>
                    {t('pages.announcementsSubtitle')}
                </p>
            </header>

            <div className={styles.timeline}>
                {announcements.map(announcement => (
                    <div key={announcement.id} className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <Megaphone size={20} className={styles.icon} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{announcement.date}</span>
                            <h3 className={styles.itemTitle}>{announcement.title}</h3>
                            <p className={styles.excerpt}>{announcement.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

