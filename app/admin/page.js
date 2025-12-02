import React from 'react';
import { getBlogPosts, getAnnouncements, getEvents } from '@/lib/data';
import AdminDashboardClient from './AdminDashboardClient';

export default function AdminDashboard() {
    const blogPosts = getBlogPosts();
    const announcements = getAnnouncements();
    const events = getEvents();

    const upcomingEvents = events.filter((e) => e.type === 'upcoming');
    const pastEvents = events.filter((e) => e.type === 'past');

    return (
        <AdminDashboardClient
            blogPosts={blogPosts}
            announcements={announcements}
            upcomingEvents={upcomingEvents}
            pastEvents={pastEvents}
        />
    );
}
