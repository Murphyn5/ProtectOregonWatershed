'use client'
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

interface News {
  id: number;
  title: string;
  date_posted: string;
  link: string;
  source: string;
  details: string;
  // Add other properties as needed
}

interface NewsProps {
  element: News;
}

const News_card: React.FC<NewsProps> = ({ element }) => {

  return (
    <Link isExternal href={element.link} key={element.id}>
      <Tooltip
        content="click to explore more"
        placement="top-end"
        className="text-persianGreen"
      >
        <Card className="py-4 h-40 w-full max-w-screen-md border hover:border-persianGreen rounded-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-1">
            <h1 className="font-bold text-large uppercase text-midnightGreen">{element.title}</h1>
            <div className='flex flex-row gap-5'>
              <h3 className="text-default-500">{element.date_posted}</h3>
              <h2 className="text-default-500 font-bold">{element.source}</h2>
            </div>
          </CardHeader>
          {/* <CardBody className="overflow-visible py-2">
            <p>{element.details}</p>
          </CardBody> */}
        </Card>

      </Tooltip>
    </Link>
  );
};

export default News_card;
