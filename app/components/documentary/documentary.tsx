'use client';
import React from 'react';
import {
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
    doc: DocumentariesProp;
}

const Documentaries: React.FC<DocumentariesPropProp> = ({ doc }) => {
    return (
      <Link isExternal href={doc.link} key={doc.id}>
        <Tooltip
          content="click to explore more"
          placement="top-end"
          className="text-persianGreen"
        >
        <div className='p-2 m-2 bg-persianGreen flex flex-col justify-center w-full'>
          <h1 className='font-bold text-lg uppercase text-white'>{doc.title}</h1>
          <h2 className='text-gray-300'>{doc.source}</h2>
          <p className='text-2xl text-white'>{doc.description}</p>
        </div>
            
        </Tooltip>
      </Link>
    );
  };
  
  export default Documentaries;