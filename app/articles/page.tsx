'use client';

import React, { useState, useEffect } from 'react';
// import News_card from '../components/news/news';


const Articles: React.FC = () => {
  interface News {
    id: number;
    title: string;
    date_posted: string;
    link: string;
    source: string;
    images: Array<string>;
    // Add other properties as needed
  }
  const [news, setNews] = useState<News[]>([]);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('/api/articles')
        .then((res) => res.json())
        .then((res) => {
          setNews(Object.values(res));
          setLoading(false);
        });
    }, []);
  
    if (isLoading) return <p>Loading...</p>;
    if (!news) return <p>No profile data</p>;
    console.log("news:", news)
    return (
      <div
        style={{ padding: '20px' }}
        className="flex flex-col items-center gap-3"
      >
        <div className="pb-5 w-screen flex flex-col items-center gap-2 bg-persianGreen">
          <h1 className="pt-4 pb-2 text-7xl text-white">News</h1>
        </div>
        
        {/* <div className='flex flex-row'>
            {Object.values(news[0]).map((n: News) => (
          <News_card key={n.id} n={n} />
        ))}
        </div> */}

      </div>
    );
  };
  
  export default Articles;