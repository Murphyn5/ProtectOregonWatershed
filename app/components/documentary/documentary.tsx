'use client';
import React from 'react';
import {
    Card,
    CardHeader,
    Link,
    Tooltip,
  } from '@nextui-org/react';

interface DocumentariesProp {
    id: number;
    title: string;
    source: string;
    link: string;
    description: string;
}

interface DocumentariesPropProp {
    element: DocumentariesProp;
}

const Documentaries: React.FC<DocumentariesPropProp> = ({ element }) => {
    return (
      <Link isExternal href={element.link} key={element.id}>
        <Tooltip
          content="click to explore more"
          placement="top-end"
          className="text-persianGreen"
        >
          <Card className="py-2 h-40 w-full max-w-screen-md border hover:border-persianGreen rounded-none bg-persianGreen">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-1 overflow-hidden">
              <h1 className="font-bold text-base uppercase text-midnightGreen">{element.title}</h1>
              <h2 className="text-default-300">{element.source}</h2>
              <p className='pt-2 text-lg font-bold text-white'>{element.description}</p>
            </CardHeader>
          </Card>
        {/* <div className='p-2 m-2 bg-persianGreen flex flex-col justify-center w-full'>
          <h1 className='font-bold text-lg uppercase text-white'>{element.title}</h1>
          <h2 className='text-gray-300'>{element.source}</h2>
          <p className='text-2xl text-white'>{element.description}</p>
        </div> */}
            
        </Tooltip>
      </Link>
    );
  };
  
  export default Documentaries;