'use client';

import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Calender_event from '../calender_event/calender_event';
// import Test from '../components/test_component/test';

const MainEventsList: React.FC = () => {
  interface Event {
    id: number;
    days: string;
    dates: string;
    times: string;
    location: string;
    title: string;
    description: string;
    link: string;
    images: Array<string>;
    // Add other properties as needed
  }
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/articles/');
      if (!res.ok) {
        throw new Error('Failed to fetch articles');
      };
      const { events } = await res.json();
      setEvents(Object.values(events));
    } catch (err) {
      setError('Error fetching articles');
    } finally {
      setIsLoading(false);
    };
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!events) return <p>No profile data</p>;

  console.log('EVENTS:', events);
  // console.log('events:', Object.values(events[0])[1]);
  // console.log('imgs:', Object.values(events[0])[1]['images'][0]);
  return (
    <div
      style={{ padding: '20px' }}
      className="flex flex-col items-center gap-3"
    >{events.slice(0, 3).map((event: Event) => (
      <Calender_event key={event.id} event={event} />
    ))}
    </div>
  );
};

export default MainEventsList;
