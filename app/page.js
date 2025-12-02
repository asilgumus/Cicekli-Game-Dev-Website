"use client";

import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Gamepad2 } from "lucide-react";
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        {t('hero.title')} <span className={styles.highlight}>{t('hero.titleHighlight')}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t('hero.subtitle')}
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/events">
                            <Button variant="primary" icon={Gamepad2}>{t('nav.joinJam')}</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline">{t('hero.learnMore')}</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.features}>
                <h2 className={styles.sectionTitle}>{t('home.whyJoin')}</h2>
                <div className={styles.grid}>
                    <Card
                        title={t('home.weeklyLessons')}
                        description={t('home.weeklyLessonsDesc')}
                        tag={t('common.membersOnly')}
                    />
                    <Card
                        title={t('home.jams')}
                        description={t('home.jamsDesc')}
                        tag={t('common.openToAll')}
                        href="/events"
                    />
                    <Card
                        title={t('home.network')}
                        description={t('home.networkDesc')}
                        tag={t('common.community')}
                    />
                </div>
            </section>
        </div>
    );
}
