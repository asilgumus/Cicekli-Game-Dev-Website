"use client";

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Card = ({ title, description, date, tag, href, author, imageUrl }) => {
    const { t } = useTranslation();

    const Content = () => (
        <div className={styles.card}>
            {imageUrl && (
                <div className={styles.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imageUrl} alt={title} className={styles.image} />
                </div>
            )}
            {tag && <span className={styles.tag}>{tag}</span>}
            <h3 className={styles.title}>{title}</h3>
            {author && <span className={styles.author}>{author}</span>}
            {date && <p className={styles.date}>{date}</p>}

            <p className={styles.description}>{description}</p>
            {href && (
                <div className={styles.footer}>
                    <span className={styles.readMore}>
                        {t('common.readMore')} <ArrowRight size={16} className={styles.icon} />
                    </span>
                </div>
            )}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className={styles.linkWrapper}>
                <Content />
            </Link>
        );
    }

    return <Content />;
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string,
    tag: PropTypes.string,
    href: PropTypes.string,
    author: PropTypes.string,
    imageUrl: PropTypes.string,
};

export default Card;
