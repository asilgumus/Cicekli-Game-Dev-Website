import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Button from '@/components/Button';
<<<<<<< HEAD
import { Plus, FileText, Megaphone, Edit } from 'lucide-react';
=======
import { Plus, FileText, Megaphone } from 'lucide-react';
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2
import { getBlogPosts, getAnnouncements } from '@/lib/data';
import { useTranslation } from '@/hooks/useTranslation';

export default function AdminDashboard() {
    const { t } = useTranslation();
    const blogPosts = getBlogPosts();
    const announcements = getAnnouncements();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{t('admin.title')}</h1>
                <Link href="/admin/new">
                    <Button variant="primary" icon={Plus}>{t('admin.createPost')}</Button>
                </Link>
            </header>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('admin.blogPosts')}</h2>
                <div className={styles.list}>
                    {blogPosts.map(post => (
                        <div key={post.id} className={styles.item}>
                            <div className={styles.itemInfo}>
                                <FileText size={20} className={styles.icon} />
                                <div>
                                    <h3 className={styles.itemTitle}>{post.title}</h3>
                                    <span className={styles.date}>{post.date}</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <span className={styles.status}>{t('admin.published')}</span>
<<<<<<< HEAD
                                <Link href={`/admin/edit/${post.id}`}>
                                    <Button variant="secondary" icon={Edit} className={styles.editButton}>
                                        {t('admin.edit')}
                                    </Button>
                                </Link>
=======
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('admin.announcements')}</h2>
                <div className={styles.list}>
                    {announcements.map(post => (
                        <div key={post.id} className={styles.item}>
                            <div className={styles.itemInfo}>
                                <Megaphone size={20} className={styles.icon} />
                                <div>
                                    <h3 className={styles.itemTitle}>{post.title}</h3>
                                    <span className={styles.date}>{post.date}</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <span className={styles.status}>{t('admin.published')}</span>
<<<<<<< HEAD
                                <Link href={`/admin/edit/${post.id}`}>
                                    <Button variant="secondary" icon={Edit} className={styles.editButton}>
                                        {t('admin.edit')}
                                    </Button>
                                </Link>
=======
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
