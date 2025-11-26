"use client";

import React from 'react';
import Card from '@/components/Card';
import PropTypes from 'prop-types';

const ExpandableCard = ({ title, description, date, tag, fullContent }) => {
    return (
        <Card
            title={title}
            description={description}
            fullContent={fullContent}
            date={date}
            tag={tag}
            expandable={true}
        />
    );
};

ExpandableCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string,
    tag: PropTypes.string,
    fullContent: PropTypes.string,
};

export default ExpandableCard;
