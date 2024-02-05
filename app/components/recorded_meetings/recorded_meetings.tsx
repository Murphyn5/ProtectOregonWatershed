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

interface Meetings {
    id: number;
    title: string;
    meeting_date: string;
    link: string;
    description: string;
    image: string;
}

interface MeetingsProps {
  meeting: Meetings;
}


const Recorded_Meetings: React.FC<MeetingsProps> = ({ meeting }) => {
  return (
    <Link isExternal href={meeting.link} key={meeting.id}>
      <Tooltip
        content="click to explore more"
        placement="top-end"
        className="text-persianGreen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-1/2">
          <Image src={meeting.image} alt="img" width={500} height={300} />
        </div>
        <div className="bg-white shadow-md rounded-lg max-w-1/2 flex flex-col justify-center items-center">
          <div className="text-3xl font-bold">{meeting.title}</div>
          <p className="text-gray-700 text-lg p-10">
            {meeting.description}
          </p>
        </div>
      </div>
      </Tooltip>
    </Link>
  );
};

export default Recorded_Meetings;
