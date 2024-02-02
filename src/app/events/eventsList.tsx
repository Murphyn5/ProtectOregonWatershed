import { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

interface Event {
    id: number;
    days: string;
    dates: string;
    times: string;
    location: string;
    title: string;
    description: string;
    lind: string;
    // Add other properties as needed
}

export default function eventsList() {

    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/community_events/')
            .then((res) => res.json())
            .then((res) => {
                setEvents(res)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!events) return <p>No profile data</p>
    

    return (
        <>
            {events.map((event) => (
                <div key={event.id}>
                <Card className="py-4 lg:w-1/2 x1:w-1/2 border hover:border-persianGreen">
                    <CardBody className="overflow-visible py-2 flex-row gap-2">
                   <div className='w-1/4 flex flex-col items-center gap-2'>
                       <h2 className='text-lg font-bold uppercase'>{event.days}</h2>
                       <h2 className='text-lg font-bold uppercase'>11:00 AM</h2>
                   </div>
                   <div className='w-1/2 flex flex-col gap-3'>
                       <h2 className='text-lg text-red-400 font-bold'>
                           {event.title}
                       </h2>
                       <h1 className='text-3xl text-red-500 font-extrabold'>
                           PUBLIC PROTEST 
                       </h1>
                       <h3 className='text-base text-default-500'>
                           Location: WALDPORT Hwy 101 and 34
                       </h3>
                       <p className='text-base text-default-500'>
                           Our chance to make some noise and build community support! 
                       </p>
                   </div>
               </CardBody>
           </Card> 
                </div>
               
            ))}
        </>
    )
}