"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Card = ({ title, description, date, tag, href, expandable = false, author, fullContent }) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const Content = () => (
        <div className={styles.card}>
            {tag && <span className={styles.tag}>{tag}</span>}
            <h3 className={styles.title}>{title}</h3>
            {author && <span className={styles.author}>{author}</span>}
            {date && <p className={styles.date}>{date}</p>}

            {expandable ? (
                <>
                    <p className={`${styles.description} ${isExpanded ? styles.expanded : styles.collapsed}`}>
                        {isExpanded ? fullContent : description}
                    </p>
                    <button
                        className={styles.expandButton}
                        onClick={toggleExpand}
                        aria-expanded={isExpanded}
                        aria-controls={`card-content-${title}`}
                    >
                        <span>{isExpanded ? t('common.readLess') : t('common.readMore')}</span>
                        <ChevronDown
                            size={16}
                            className={`${styles.chevron} ${isExpanded ? styles.rotated : ''}`}
                        />
                    </button>
                </>
            ) : (
                <>
                    <p className={styles.description}>{description}</p>
                    {href && (
                        <div className={styles.footer}>
                            <span className={styles.readMore}>
                                {t('common.readMore')} <ArrowRight size={16} className={styles.icon} />
                            </span>
                        </div>
                    )}
                </>
            )}
        </div>
    );

    if (href && !expandable) {
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
    expandable: PropTypes.bool,
    author: PropTypes.string,
    fullContent: PropTypes.string,
};

export default Card;
