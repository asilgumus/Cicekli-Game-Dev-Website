import React from 'react';
import { getAnnouncements } from '@/lib/data';
import AnnouncementsClient from './AnnouncementsClient';

export default function Announcements() {
    const announcements = getAnnouncements();

    return <AnnouncementsClient announcements={announcements} />;
}
