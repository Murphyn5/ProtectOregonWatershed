'use client';
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Tooltip,
} from '@nextui-org/react';
import Image from 'next/image';

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

interface ArticleProps {
  article: Article;
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  console.log('IMAGE URL:', article.images[0].url)

  return (
    <Link isExternal href={article.link} key={article.id}>
      <Tooltip
        content="click to explore more about this article"
        placement="top-end"
        className="text-persianGreen"
      >
        <Card
          key={article.id}
          className="py-4 border hover:border-persianGreen"
        >
          <CardBody className="py-2 flex-row gap-10">
            <div className="flex flex-col items-start gap-3">
              <Image
                alt="pictures"
                className="object-cover rounded-xl"
                src={article.images[0].url}
                width={270}
                height={270}
              />
              <h1 className="text-2xl text-red-500 font-extrabold">
                {article.title}
              </h1>
              <h2 className="text-lg font-bold uppercase text-center">
                {article.source}
              </h2>
              <h2 className="text-md font-bold uppercase text-center">
                {article.date_posted}
              </h2>
            </div>
          </CardBody>
        </Card>
      </Tooltip>
    </Link>
  )
}

export default Article