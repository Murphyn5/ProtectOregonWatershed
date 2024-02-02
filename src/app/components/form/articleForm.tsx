'use client';
import React, { useState } from 'react';
import makeRequest from '../../../api/ServerAPI';
// Import UI components from your UI library
import { Input, Button } from '@nextui-org/react';

const ArticleForm = () => {
  const [article, setArticle] = useState({
    title: '',
    source: '',
    link: '',
    date_posted: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data, error } = await makeRequest('/api/article/', 'POST', article); // Adjust the URL as needed
    if (error) {
      setError(error);
      setSuccess(false);
      return;
    }
    setSuccess(true);
    // Optionally reset the form or handle the successful submission (e.g., redirect or display a success message)
  };

  return (
    <>
      {/* {error && (
        <Notification color="error" title="Error" onClose={() => setError('')}>
          {error}
        </Notification>
      )}
      {success && (
        <Notification color="success" title="Success" onClose={() => setSuccess(false)}>
          Article created successfully!
        </Notification>
      )} */}
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          value={article.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <Input
          name="source"
          value={article.source}
          onChange={handleChange}
          placeholder="Source"
          required
        />
        <Input
          name="link"
          value={article.link}
          onChange={handleChange}
          placeholder="Link"
          required
        />
        <Input
          name="date_posted"
          value={article.date_posted}
          onChange={handleChange}
          placeholder="Date Posted"
          required
        />
        <Button type="submit" color="primary">
          Create Article
        </Button>
      </form>
    </>
  );
};

export default ArticleForm;
