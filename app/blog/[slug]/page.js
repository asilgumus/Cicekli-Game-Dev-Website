import React from 'react';
import styles from './page.module.css';
import { getPostBySlug } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function BlogPost({ params }) {
    const { t } = useTranslation();
    const post = getPostBySlug(params.slug);

    if (!post) {
        return <div>Gönderi bulunamadı</div>;
    }

    return (
        <div className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
                <ArrowLeft size={20} /> {t('common.backTo')} Blog
            </Link>

            <article className={styles.article}>
                <header className={styles.header}>
                    <div className={styles.meta}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                    </div>
                    <h1 className={styles.title}>{post.title}</h1>
                </header>

                <div className={styles.content}>
                    <p>{post.content}</p>
                </div>
            </article>
        </div>
    );
}
