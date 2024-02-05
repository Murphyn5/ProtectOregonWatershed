'use client';
import React, { useState, useEffect } from 'react';
import Article from '../../../../app/components/article/Article';

const ArticleList: React.FC = () => {
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
    <div>
      {articleList.map((article: Article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
