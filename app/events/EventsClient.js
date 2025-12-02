"use client";

import React from 'react';
import styles from './page.module.css';
import Card from '@/components/Card';
import { useTranslation } from '@/hooks/useTranslation';

export default function EventsClient({ upcomingEvents, pastEvents }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('pages.eventsTitle')}</h1>
                <p className={styles.subtitle}>
                    {t('pages.eventsSubtitle')}
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('pages.upcomingEvents')}</h2>
                <div className={styles.grid}>
                    {upcomingEvents.map((event) => (
                        <Card
                            key={event.id}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            tag={event.tag}
                            href={`/blog/${event.slug}`}
                            imageUrl={event.imageUrl}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('pages.pastEvents')}</h2>
                <div className={styles.grid}>
                    {pastEvents.map((event) => (
                        <Card
                            key={event.id}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            tag={event.tag}
                            href={`/blog/${event.slug}`}
                            imageUrl={event.imageUrl}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

