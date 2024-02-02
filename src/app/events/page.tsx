"use client"

import { Button } from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter, Link, Tooltip } from "@nextui-org/react";
import { useState, useEffect } from 'react'
// import Test from '../components/test_component/test';

export default function Events() {
    interface Event {
        id: number;
        days: string;
        dates: string;
        times: string;
        location: string;
        title: string;
        description: string;
        link: string;
        images: object;
        // Add other properties as needed
    }

    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/community_events')
            .then((res) => res.json())
            .then((res) => {
                setEvents(Object.values(res))
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!events) return <p>No profile data</p>

    console.log("events:", events[0])
    console.log("imgs:", Object.values(events[0])[1]["images"][0])
    return (
        <div style={{ padding: '20px' }} className="flex flex-col items-center gap-3">
            <div className='pb-5 w-screen flex flex-col items-center gap-2 bg-persianGreen'>
                <h1 className='pt-4 pb-2 text-7xl text-white'>Events</h1>
                <p className='w-1/2 text-center'>“You cannot get through a single day without having an impact on the world around you. What you do makes a difference, and you have to decide what kind of difference you want to make.”  ― Jane Goodall</p>
            </div>

            {Object.values(events[0]).map((event) => (
                <Link isExternal href={event.link}>
                    <Tooltip content="click to explore more about this event" placement="right-start" className='text-persianGreen'>
                    <Card key={event.id} className="py-4 w-full max-w-screen-md border hover:border-persianGreen">
                        <CardBody className="overflow-visible py-2 flex-row gap-5">
                            <div className='w-1/4'>
                                <img
                                    alt="pictures"
                                    className="object-cover rounded-xl"
                                    src={event.images[0]}
                                    width={270}
                                />
                            </div>
                            <div className='w-1/4 flex flex-col items-center gap-3'>
                                <h2 className='text-lg font-bold uppercase'>{event.days}</h2>
                                <h2 className='text-lg font-bold uppercase'>{event.dates}</h2>
                                <h2 className='text-lg font-bold uppercase'>{event.times}</h2>
                            </div>
                            <div className='w-1/2 flex flex-col gap-3'>
                                {/* <h2 className='text-lg text-red-400 font-bold'>
                                {event.title}
                            </h2> */}
                                <h1 className='text-3xl text-red-500 font-extrabold'>
                                    {event.title}
                                </h1>
                                <h3 className='text-base text-default-500'>
                                    Location: {event.location}
                                </h3>
                                <p className='text-base text-black'>
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
}
