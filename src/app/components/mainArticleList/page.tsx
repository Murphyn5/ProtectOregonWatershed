'use client';
import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Article from '../article/Article';

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

  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/articles/');
      if (!res.ok) {
        throw new Error('Failed to fetch articles');
      };
      const { articles } = await res.json();
      setArticleList(Object.values(articles));
    } catch (err) {
      setError('Error fetching articles');
    } finally {
      setIsLoading(false);
    };
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!articleList) return <p>No data</p>;

  return (
    <div className='flex'>
      {articleList.slice(0, 3).map((article: Article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default MainArticleList;
