import React from 'react';
import styles from './page.module.css';
import ExpandableCard from '@/components/ExpandableCard';
import { getBlogPosts } from '@/lib/data';
import { useTranslation } from '@/hooks/useTranslation';

export default function Blog() {
    const { t } = useTranslation();
    const posts = getBlogPosts();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('pages.blogTitle')}</h1>
                <p className={styles.subtitle}>
                    {t('pages.blogSubtitle')}
                </p>
            </header>

            <div className={styles.grid}>
                {posts.map(post => (
                    <ExpandableCard
                        key={post.id}
                        title={post.title}
                        description={post.excerpt}
                        fullContent={post.content}
                        date={post.date}
                        author={post.author}
                    />
                ))}
            </div>
        </div>
    );
}
