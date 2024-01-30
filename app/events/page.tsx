'use client';

import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import {EventsList} from './eventsData';
import Calender_event from '../components/calender_event/calender_event';
import makeRequest from '../ServerAPI';
// import Test from '../components/test_component/test';

const Events: React.FC = () => {
  interface Event {
    id: number;
    days: string;
    dates: string;
    times: string;
    location: string;
    title: string;
    description: string;
    link: string;
    image: string;
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
        console.log('res:', res);
      });
    // makeRequest('GET', '/api/community_events')
    //   .then((res) => {
    //     setEvents(Object.values(res));
    //     setLoading(false);
    //   });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!events) return <p>No profile data</p>;
  // console.log('events:', events);
  // console.log('events:', Object.values(events[0])[1]);
  // console.log('imgs:', Object.values(events[0])[1]['images'][0]);


  return (
    <div
      // style={{ padding: '20px' }}
      className="flex flex-col items-center gap-3"
    >
      <div className="pb-5 w-screen flex flex-col items-center gap-2 bg-persianGreen">
        <h1 className="pt-4 pb-2 text-7xl text-white">Events</h1>
        <p className="w-1/2 text-center">
          “You cannot get through a single day without having an impact on the
          world around you. What you do makes a difference, and you have to
          decide what kind of difference you want to make.” ― Jane Goodall
        </p>
      </div>

      {Object.values(events[0]).map((event: Event) => (
        <Calender_event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;
