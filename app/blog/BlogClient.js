"use client";

import React from 'react';
import styles from './page.module.css';
import Card from '@/components/Card';
import { useTranslation } from '@/hooks/useTranslation';

export default function BlogClient({ posts }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('pages.blogTitle')}</h1>
                <p className={styles.subtitle}>
                    {t('pages.blogSubtitle')}
                </p>
            </header>

            <div className={styles.grid}>
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        title={post.title}
                        description={post.excerpt}
                        date={post.date}
                        author={post.author}
                        href={`/blog/${post.slug}`}
                        imageUrl={post.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

