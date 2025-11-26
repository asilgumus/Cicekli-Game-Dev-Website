import React from 'react';
import styles from './page.module.css';
import ExpandableCard from '@/components/ExpandableCard';
import { getEvents } from '@/lib/data';
import { useTranslation } from '@/hooks/useTranslation';

export default function Events() {
    const { t } = useTranslation();
    const events = getEvents();
    const upcomingEvents = events.filter(e => e.type === 'upcoming');
    const pastEvents = events.filter(e => e.type === 'past');

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
                    {upcomingEvents.map(event => (
                        <ExpandableCard
                            key={event.id}
                            title={event.title}
                            description={event.description}
                            fullContent={event.fullContent}
                            date={event.date}
                            tag={event.tag}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('pages.pastEvents')}</h2>
                <div className={styles.grid}>
                    {pastEvents.map(event => (
                        <ExpandableCard
                            key={event.id}
                            title={event.title}
                            description={event.description}
                            fullContent={event.fullContent}
                            date={event.date}
                            tag={event.tag}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
