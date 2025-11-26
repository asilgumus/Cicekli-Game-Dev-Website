"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { Gamepad2, Lock, User } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function Login() {
    const router = useRouter();
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/admin');
            } else {
                setError(t('login.errorAuth'));
                // Trigger shake animation
                const form = document.getElementById('loginForm');
                form.classList.add(styles.shake);
                setTimeout(() => form.classList.remove(styles.shake), 500);
            }
        } catch (err) {
            setError(t('common.error'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card} id="loginForm">
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Gamepad2 size={40} className={styles.logoIcon} />
                    </div>
                    <h1 className={styles.title}>{t('login.title')}</h1>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <User className={styles.inputIcon} size={20} />
                        <input
                            type="text"
                            placeholder={t('login.username')}
                            required
                            className={styles.input}
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <Lock className={styles.inputIcon} size={20} />
                        <input
                            type="password"
                            placeholder={t('login.password')}
                            required
                            minLength={8}
                            className={styles.input}
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <div className={styles.checkboxGroup}>
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={formData.rememberMe}
                            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                        />
                        <label htmlFor="rememberMe">{t('login.rememberMe')}</label>
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <Button
                        type="submit"
                        variant="primary"
                        className={styles.submitButton}
                        disabled={loading}
                    >
                        {loading ? t('login.signingIn') : t('login.signIn')}
                    </Button>
                </form>
            </div>
        </div>
    );
}
