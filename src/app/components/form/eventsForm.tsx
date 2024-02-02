'use client';
import { Input, Textarea, Button, Spacer } from '@nextui-org/react';
import { useState, useEffect } from 'react';
// import { Input, TimePicker } from '@nextui-org/react';
import makeRequest from '../../../api/ServerAPI';

export default function EventForm() {
  const [Data, setData] = useState(null);
  const [Error, setError] = useState('no error');

  useEffect(() => {
    makeRequest('/api/articles', 'GET').then((response: any) => {
      console.log('response:', response);
      setData(response.data);
      setError(response.error);
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}
      >
        Calendar Event Form
      </div>

      <Input fullWidth color="primary" size="lg" placeholder="Title" />
      <Spacer y={1} />

      <Input
        // bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Select date"
      />
      <Spacer y={1} />

      <Input
        // bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Select time"
      />
      <Spacer y={1} />

      <Input
        // clearable
        // bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Location"
      />
      <Spacer y={1} />

      <Textarea
        // bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Description"
      />
      <Spacer y={1} />

      <Button color="primary" size="lg">
        Submit
      </Button>
    </div>
  );
}
