'use client';
import React, { useState, useEffect } from 'react';
import Calender_event from '../calender_event/calender_event';


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Tooltip,
} from '@nextui-org/react';
import Image from 'next/image';

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
    images: Array<{ url: string }>;
    // Add other properties as needed
  }
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/community_events/');
      if (!res.ok) {
        throw new Error('Failed to fetch events');
      };
      const { community_events } = await res.json();
      setEvents(Object.values(community_events));
    } catch (err) {
      setError('Error fetching events');
    } finally {
      setIsLoading(false);
    };
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!events) return <p>No profile data</p>;

  // console.log('EVENTS:', events);
  // console.log('events:', Object.values(events[0])[1]);
  // console.log('imgs:', Object.values(events[0])[1]['images'][0]);
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 w-full items-center p-5 items-stretch">
      {events.map(event => (
        <Link isExternal href={event.link} key={event.id} className='h-max'>
          <Tooltip
            content="click to explore more about this article"
            placement="top-end"
          >
            <Card
              key={event.id}
              className='w-full h-stretch'
            >
              <CardBody className="flex h-max">
                <div className="flex flex-col items-start gap-1 h-max">
                  <img
                    alt="pictures"
                    className="object-cover rounded-xl w-full h-48 object-cover object-top"
                    src={event.images[0].url}
                  // width={300}
                  // height={270}
                  />
                  <h1 className="flex flex-wrap text-2xl text-splash1 font-extrabold">
                    {event.title}
                  </h1>
                  <h2 className="text-lg font-bold">
                    {event.dates}
                  </h2>
                  <h2 className="text-md font-bold">
                    {event.times}
                  </h2>
                  <p className="text-md">
                    {event.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tooltip>
        </Link>
      ))}
    </div>
  );
};

export default MainEventsList;
