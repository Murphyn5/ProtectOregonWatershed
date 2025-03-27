'use client';
import React, { useState, useEffect } from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Tooltip,
} from '@nextui-org/react';
import Image from 'next/image';


const MainArticleList: React.FC = () => {
  interface Article {
    id: number;
    title: string;
    source: string;
    date_posted: string;
    link: string;
    created_at: string;
    updated_at: string;
    images: Array<{ url: string }>;
  };
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const formatDateTime = (inputString: string): string => {
    const dateTime = new Date(inputString);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formattedDateTime = dateTime.toLocaleDateString('en-US', options);
    return formattedDateTime;
  };


  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/articles/');
      if (!res.ok) {
        throw new Error('Failed to fetch articles');
      }

      let { articles } = await res.json();

      // Save only the first three articles to state
      setArticleList((Object.values(articles).slice(0, 3) as Article[]));
    } catch (err) {
      setError('Error fetching articles');
    } finally {
      setIsLoading(false);
    }
  };



  useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!articleList) return <p>No data</p>;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 w-full items-center p-5 items-stretch">
      {articleList.map(article => (
        <Link isExternal href={article.link} key={article.id} className='h-max'>
          <Tooltip
            content="click to explore more about this article"
            placement="top-end"
          >
            <Card
              key={article.id}
              className='w-full h-max'
            >
              <CardBody className="py-2 flex h-max">
                <div className="flex flex-col items-start gap-1 h-max">
                  <Image
                    alt="pictures"
                    className="object-cover rounded-xl"
                    src={article.images[0]?.url}
                    width={270}
                    height={270}
                  />
                  <h1 className="flex flex-wrap text-2xl text-splash1 font-extrabold">
                    {article.title}
                  </h1>
                  <h2 className="text-lg font-bold">
                    {article.source}
                  </h2>
                  <h2 className="text-md font-bold">
                    {formatDateTime(article.date_posted)}
                  </h2>
                </div>
              </CardBody>
            </Card>
          </Tooltip>
        </Link>
      ))}
    </div>
  );
};

export default MainArticleList;
