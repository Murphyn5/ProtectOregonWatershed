import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Tooltip,
} from '@nextui-org/react';
import Image from 'next/image';

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

interface CalenderEventProps {
  event: Event;
}

const Calender_event: React.FC<CalenderEventProps> = ({ event }) => {
  return (
    <Link isExternal href={event.link} key={event.id} className='w-full'>
      <Tooltip
        content="click to explore more about this event"
        placement="top-end"
        className="text-persianGreen"
      >
        <Card
          key={event.id}
          className="py-2 w-full max-w-screen-lg border hover:border-persianGreen"
        >
          <CardBody className="py-2 flex-col md:flex-row gap-2 md:gap-10">
            <div className="md:w-1/4">
              <Image
                alt="pictures"
                className="object-cover w-full h-full rounded-md"
                src={event.images[0]?.url}
                width={300}
                height={300}
              />
            </div>
            <div className="md:w-1/4 flex flex-col items-center md:gap-5 md:pt-5">
              <h2 className="text-lg font-bold uppercase text-center">
                {event.days}
              </h2>
              <h2 className="text-lg font-bold uppercase text-center">
                {event.dates}
              </h2>
              <h2 className="text-lg font-bold uppercase text-center">
                {event.times}
              </h2>
            </div>
            <div className="md:w-1/2 flex flex-col md:gap-3">
              <h1 className="text-3xl text-gray-500 font-extrabold text-center">
                {event.title}
              </h1>
              <h3 className="text-base text-default-500 text-center">
                Location: {event.location}
              </h3>
              <p className="text-base text-black text-center">{event.description}</p>
            </div>
          </CardBody>
        </Card>
      </Tooltip>
    </Link>
  );
};

export default Calender_event;
