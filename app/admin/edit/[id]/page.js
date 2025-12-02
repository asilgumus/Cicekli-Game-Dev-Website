"use client";

import React, { useState, useEffect } from 'react';
import styles from '../../new/page.module.css';
import Button from '@/components/Button';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function EditPost() {
    const router = useRouter();
    const params = useParams();
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        excerpt: '',
        content: '',
        type: 'blog',
        author: 'Admin',
        eventDate: '',
        tag: '',
        imageUrl: ''
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
                            author: data.post.author || 'Admin',
                            eventDate: data.post.eventDate || '',
                            tag: data.post.tag || '',
                            imageUrl: data.post.imageUrl || '',
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const data = new FormData();
            data.append('file', file);

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data,
            });

            if (!res.ok) {
                throw new Error('Upload failed');
            }

            const json = await res.json();
            if (json?.url) {
                setFormData((prev) => ({ ...prev, imageUrl: json.url }));
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert(t('common.error'));
        } finally {
            setUploading(false);
        }
    };

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

    const isEvent =
        formData.type === 'event_upcoming' || formData.type === 'event_past';

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
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="type">{t('post.typeLabel')}</label>
                    <select
                        id="type"
                        value={formData.type}
                        onChange={(e) =>
                            setFormData({ ...formData, type: e.target.value })
                        }
                        className={styles.select}
                    >
                        <option value="blog">{t('post.blogPost')}</option>
                        <option value="announcement">
                            {t('post.announcement')}
                        </option>
                        <option value="event_upcoming">
                            {t('post.eventUpcoming')}
                        </option>
                        <option value="event_past">
                            {t('post.eventPast')}
                        </option>
                    </select>
                </div>

                {isEvent && (
                    <div className={styles.formGroup}>
                        <label htmlFor="eventDate">
                            {t('post.eventDateLabel')}
                        </label>
                        <input
                            type="date"
                            id="eventDate"
                            value={formData.eventDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    eventDate: e.target.value,
                                })
                            }
                            className={styles.input}
                        />
                    </div>
                )}

                {isEvent && (
                    <div className={styles.formGroup}>
                        <label htmlFor="tag">{t('post.tagLabel')}</label>
                        <input
                            type="text"
                            id="tag"
                            value={formData.tag}
                            onChange={(e) =>
                                setFormData({ ...formData, tag: e.target.value })
                            }
                            className={styles.input}
                            placeholder={t('post.tagPlaceholder')}
                        />
                    </div>
                )}

                <div className={styles.formGroup}>
                    <label htmlFor="excerpt">{t('post.excerptLabel')}</label>
                    <textarea
                        id="excerpt"
                        required
                        value={formData.excerpt}
                        onChange={(e) =>
                            setFormData({ ...formData, excerpt: e.target.value })
                        }
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
                        onChange={(e) =>
                            setFormData({ ...formData, content: e.target.value })
                        }
                        className={styles.textarea}
                        rows={10}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="image">{t('post.imageLabel')}</label>
                    <div className={styles.imageRow}>
                        <div className={styles.fileInputWrapper}>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        <span className={styles.orText}>/</span>
                        <input
                            type="text"
                            placeholder={t('post.imageUrlPlaceholder')}
                            value={formData.imageUrl}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    imageUrl: e.target.value,
                                })
                            }
                            className={styles.input}
                        />
                    </div>
                    {uploading && (
                        <p className={styles.uploadInfo}>
                            <ImageIcon size={16} />{' '}
                            {t('post.uploadingImage')}
                        </p>
                    )}
                    {formData.imageUrl && (
                        <div className={styles.imagePreview}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={formData.imageUrl}
                                alt="preview"
                                className={styles.image}
                            />
                        </div>
                    )}
                </div>

                <div className={styles.actions}>
                    <Button
                        type="submit"
                        variant="primary"
                        icon={Save}
                        disabled={loading}
                    >
                        {loading ? t('post.saving') : t('common.save')}
                    </Button>
                </div>
            </form>
        </div>
    );
}

