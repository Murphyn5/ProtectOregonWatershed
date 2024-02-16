'use client';

import React, { useState, useEffect } from 'react';
import News_card from '../components/news_card/news_card';
import Documentaries from '../components/documentary/documentary';
import Recorded_Meetings from '../components/recorded_meetings/recorded_meetings';
// import { NewsList, DocumentariesList, RecordedMeetingsList } from "./articlesData.js";
import Image from 'next/image';
import {Tabs, Tab, colors} from "@nextui-org/react";

const Info: React.FC = () => {
  interface News {
    id: number;
    title: string;
    date_posted: string;
    link: string;
    source: string;
    details: string;
  }

  interface Meetings {
    id: number;
    title: string;
    meeting_date: string;
    link: string;
    description: string;
    images: { url: string }[];
  }

  interface Documentaries {
    id: number;
    title: string;
    source: string;
    link: string;
    description: string;
  }

  // const recordedMeetings = RecordedMeetingsList;
  //*** use when connected to database ***
  const [news, setNews] = useState<News[]>([]);
  const [documentaries, setDocumentaries] = useState<Documentaries[]>([]);
  const [meetings, setMeetings] = useState<Meetings[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetch('/api/articles')
        .then((res) => res.json())
        .then((res) => {
          setNews(Object.values(res));
        });

      await fetch('/api/documentaries')
        .then((res) => res.json())
        .then((res) => {
          setDocumentaries(Object.values(res));
        });

      await fetch('/api/meetings')
        .then((res) => res.json())
        .then((res) => {
          setMeetings(Object.values(res));
        });
      setLoading(false)
    })();

  }, []);

  if (isLoading) return <p>Loading...</p>;

  //tabs
  let tabs = [
    {
      id: "news",
      label: "News",
      color: "persianGreen",
      content: news,
      component: News_card,
      grid: "grid-cols-2"
    },
    {
      id: "documentaries",
      label: "Documentaries",
      color: "bg-persianGreen",
      content: documentaries,
      component: Documentaries,
      grid: "grid-cols-2"
    },
    {
      id: "recorded_meetings",
      label: "Recorded meetings",
      color: "text-persianGreen",
      content: meetings,
      component: Recorded_Meetings,
      grid: "grid-cols-1"
    }
  ];
  
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger"
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full h-[300px]"> {/* Set the desired height */}
        <Image
          src="/event3.jpeg"
          alt="Our Vision"
          layout="fill"
          objectFit="cover" // or 'contain' based on your need
        />
      </div>
      <Tabs aria-label="Dynamic tabs" items={tabs} radius='sm' size='lg' color='success'>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <div className={`grid grid-cols-1 gap-1 md:${item.grid} w-full items-center`}>
              {Object.values(item.content[0]).map((element) => (
                <item.component key={element.id} element={element} />
              ))}
            </div>
            
          </Tab>
        )}
      </Tabs>
    </div>  
    // <div
    //   className="flex flex-col items-center gap-3"
    // >
    //   {/* <div className="pb-5 w-screen flex flex-col items-center gap-2 bg-persianGreen">
    //       <h1 className="pt-4 pb-2 text-7xl text-white">News</h1>
    //     </div> */}
    //   <div className="grid grid-cols-1 md:grid-cols-3 w-full">
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
    //     </div>
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-midnightGreen">
    //       <h1 className="py-8 text-4xl text-white">News</h1>
    //     </div>
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-lightGreen">
    //     </div>
    //   </div>
    //   <div className="relative w-full h-[450px]"> {/* Set the desired height */}
    //     <Image
    //       src="/event3.jpeg"
    //       alt="Our Vision"
    //       layout="fill"
    //       objectFit="cover" // or 'contain' based on your need
    //     />
    //   </div>

    //   <div className="grid grid-cols-1 gap-1 md:grid-cols-3 w-full items-center">

    //     {Object.values(news[0]).map((n: News) => (
    //       <News_card key={n.id} n={n} />
    //     ))}
    //   </div>


    //   <div className="grid grid-cols-1 md:grid-cols-3 w-full">
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-midnightGreen"></div>
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
    //       <h1 className="py-8 text-4xl text-white">Documentaries</h1>
    //     </div>
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-lightGreen">
    //     </div>
    //   </div>

    //   <div className='w-full py-10 flex flex-col items-center justify-center'>
    //     <div className='text-4xl font-semibold text-grey-600 m-2 pb-5'>Check This Out!</div>
    //     <div className="grid grid-cols-1 md:grid-cols-2">
    //       {Object.values(documentaries[0]).map((doc: Documentaries) => (
    //         <Documentaries key={doc.id} doc={doc} />
    //       ))}
    //     </div>
    //   </div>


    //   <div className="grid grid-cols-1 md:grid-cols-3 w-full">
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
    //     </div>
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-lightGreen">
    //       <h1 className="py-8 text-4xl text-white">Recorded Meeting</h1>
    //     </div>
    //     <div className="w-full h-50 flex flex-col items-center justify-center bg-midnightGreen">
    //     </div>
    //   </div>
    //   <div className='text-4xl font-semibold text-grey-600 m-5'>Protect Oregon Watersheds</div>
    //   <p className='text-lg text-grey-500 pb-10'>FREE Educational Meetings held to inform the public about environmental issues regarding spraying pesticides on the land.</p>
    //   {Object.values(meetings[0]).map((meeting: Meetings) => (
    //     <Recorded_Meetings key={meeting.id} meeting={meeting} />
    //   ))}
    // </div>
  );
};

export default Info;
