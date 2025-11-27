"use client";

import React, { useState, useEffect } from 'react';
import styles from '../../new/page.module.css';
import Button from '@/components/Button';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function EditPost() {
    const router = useRouter();
    const params = useParams();
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        excerpt: '',
        content: '',
        type: 'blog',
        author: 'Admin'
    });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/posts?id=${params.id}`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.post) {
                        setFormData({
                            id: data.post.id,
                            title: data.post.title || '',
                            excerpt: data.post.excerpt || '',
                            content: data.post.content || '',
                            type: data.post.type || 'blog',
                            author: data.post.author || 'Admin'
                        });
                    }
                } else {
                    alert(t('common.error'));
                    router.push('/admin');
                }
            } catch (error) {
                console.error('Error:', error);
                alert(t('common.error'));
                router.push('/admin');
            } finally {
                setFetching(false);
            }
        };

        if (params.id) {
            fetchPost();
        }
    }, [params.id, router, t]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/posts', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/admin');
                router.refresh();
            } else {
                alert(t('common.error'));
            }
        } catch (error) {
            console.error('Error:', error);
            alert(t('common.error'));
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className={styles.container}>
                <p>{t('common.loading')}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Link href="/admin" className={styles.backLink}>
                <ArrowLeft size={20} /> {t('post.backToDashboard')}
            </Link>

            <h1 className={styles.title}>{t('post.editTitle')}</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">{t('post.titleLabel')}</label>
                    <input
                        type="text"
                        id="title"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="type">{t('post.typeLabel')}</label>
                    <select
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className={styles.select}
                    >
                        <option value="blog">{t('post.blogPost')}</option>
                        <option value="announcement">{t('post.announcement')}</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="excerpt">{t('post.excerptLabel')}</label>
                    <textarea
                        id="excerpt"
                        required
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        className={styles.textarea}
                        rows={3}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="content">{t('post.contentLabel')}</label>
                    <textarea
                        id="content"
                        required
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className={styles.textarea}
                        rows={10}
                    />
                </div>

                <div className={styles.actions}>
                    <Button type="submit" variant="primary" icon={Save} disabled={loading}>
                        {loading ? t('post.saving') : t('common.save')}
                    </Button>
                </div>
            </form>
        </div>
    );
}

