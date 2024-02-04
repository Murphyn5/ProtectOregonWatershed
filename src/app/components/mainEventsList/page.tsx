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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/community_events')
      .then((res) => res.json())
      .then((res) => {
        setEvents(Object.values(res));
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!events) return <p>No profile data</p>;

  // console.log('events:', Object.values(events[0])[1]);
  // console.log('imgs:', Object.values(events[0])[1]['images'][0]);
  return (
    <div
      style={{ padding: '20px' }}
      className="flex flex-col items-center gap-3"
    >{Object.values(events[0]).slice(0, 3).map((event: Event) => (
      <Calender_event key={event.id} event={event} />
    ))}
    </div>
  );
};

export default MainEventsList;
