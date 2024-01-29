import { Button } from '@nextui-org/react';
import EventForm from '../components/form/eventsForm';
import ArticleForm from '../components/form/articleForm';

export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Page</h1>
      <div>
        <EventForm />
        <ArticleForm />
      </div>
      {/* <Test /> */}
    </div>
  );
}
