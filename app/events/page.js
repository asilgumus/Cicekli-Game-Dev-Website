import React from 'react';
import { getEvents } from '@/lib/data';
import EventsClient from './EventsClient';

export default function Events() {
    const events = getEvents();
    const upcomingEvents = events.filter(e => e.type === 'upcoming');
    const pastEvents = events.filter(e => e.type === 'past');

    return <EventsClient upcomingEvents={upcomingEvents} pastEvents={pastEvents} />;
}
