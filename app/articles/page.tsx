'use client';

import React, { useState, useEffect } from 'react';
import News_card from '../components/news_card/news_card';
import Documentaries from '../components/documentary/documentary';
import Recorded_Meetings from '../components/recorded_meetings/recorded_meetings';
import {NewsList, DocumentariesList, RecordedMeetingsList} from "./articlesData.js";
import Image from 'next/image';

const Articles: React.FC = () => {
  interface News {
    id: number;
    title: string;
    date_posted: string;
    link: string;
    source: string;
    details: string;
    // images: Array<string>;
  }

  interface Meetings {
    id: number;
    title: string;
    meeting_date: string;
    link: string;
    description: string;
    image: string;
  }

  interface DocumentariesProp {
    id: number;
    title: string;
    source: string;
    link: string;
    description: string;
    // images: Array<string>;
  }

  const news = NewsList;
  const recordedMeetings = RecordedMeetingsList;
  const documentaries = DocumentariesList;
  //*** use when connected to database ***
  // const [news, setNews] = useState<News[]>([]);
  // const [isLoading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetch('/api/articles')
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setNews(Object.values(res));
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (isLoading) return <p>Loading...</p>;
  //   if (!news) return <p>No profile data</p>;
  //   console.log("news:", news)

    return (
      <div
        className="flex flex-col items-center gap-3"
      >
        {/* <div className="pb-5 w-screen flex flex-col items-center gap-2 bg-persianGreen">
          <h1 className="pt-4 pb-2 text-7xl text-white">News</h1>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
          </div>
          <div className="w-full h-50 flex flex-col items-center justify-center bg-midnightGreen">
            <h1 className="py-8 text-4xl text-white">News</h1>
          </div>
          <div className="w-full h-50 flex flex-col items-center justify-center bg-lightGreen">
          </div>
        </div>
        <div className="relative w-full h-[450px]"> {/* Set the desired height */}
          <Image
            src="/event3.jpeg"
            alt="Our Vision"
            layout="fill"
            objectFit="cover" // or 'contain' based on your need
          />
      </div>

        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 w-full items-center">
          {Object.values(news).map((n: News) => (
            <News_card key={n.id} n={n} />
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="w-full h-50 flex flex-col items-center justify-center bg-midnightGreen"></div>
          <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
            <h1 className="py-8 text-4xl text-white">Documentaries</h1>
          </div>
          <div className="w-full h-50 flex flex-col items-center justify-center bg-lightGreen">
          </div>
        </div>

        <div className='w-full py-10 flex flex-col items-center justify-center'>
          <div className='text-4xl font-semibold text-grey-600 m-2 pb-5'>Check This Out!</div>
          <div className="grid grid-cols-1 md:grid-cols-2">
          {documentaries.map((doc: DocumentariesProp) => (
            <Documentaries key={doc.id} doc={doc}/>
          ))}
        </div>
      </div>


        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
          </div>
          <div className="w-full h-50 flex flex-col items-center justify-center bg-lightGreen">
            <h1 className="py-8 text-4xl text-white">Recorded Meeting</h1>
          </div>
          <div className="w-full h-50 flex flex-col items-center justify-center bg-midnightGreen">
          </div>
        </div>
        <div className='text-4xl font-semibold text-grey-600 m-5'>Protect Oregon Watersheds</div>
        <p className='text-lg text-grey-500 pb-10'>FREE Educational Meetings held to inform the public about environmental issues regarding spraying pesticides on the land.</p>
        {Object.values(recordedMeetings).map((meeting: Meetings) => (
          <Recorded_Meetings key={meeting.id} meeting={meeting}/>
        ))}
      </div>
    );
  };

  export default Articles;
