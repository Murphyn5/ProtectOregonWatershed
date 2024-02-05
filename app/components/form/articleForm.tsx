'use client';
import React, { useState } from 'react';
// Import UI components from your UI library
import { Input, Button, Spacer } from '@nextui-org/react';

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

    // Optionally reset the form or handle the successful submission (e.g., redirect or display a success message)
  };

  return (
    <div className="p-20">
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
        <div
          style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}
        >
          Calendar Event Form
        </div>
        <Input
          name="title"
          color="primary"
          size="lg"
          value={article.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <Spacer y={1} />
        <Input
          name="source"
          color="primary"
          size="lg"
          value={article.source}
          onChange={handleChange}
          placeholder="Source"
          required
        />
        <Spacer y={1} />
        <Input
          name="link"
          color="primary"
          size="lg"
          value={article.link}
          onChange={handleChange}
          placeholder="Link"
          required
        />
        <Spacer y={1} />
        <Input
          name="date_posted"
          color="primary"
          size="lg"
          value={article.date_posted}
          onChange={handleChange}
          placeholder="Date Posted"
          required
        />
        <Spacer y={1} />
        <Button type="submit" color="primary">
          Create Article
        </Button>
      </form>
    </div>
  );
};

export default ArticleForm;
