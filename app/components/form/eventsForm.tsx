'use client';
import { Input, Textarea, Button, Spacer } from '@nextui-org/react';
import { useState, useEffect } from 'react';
// import { Input, TimePicker } from '@nextui-org/react';

export default function EventForm() {
  const [Data, setData] = useState(null);
  const [Error, setError] = useState('no error');

  return (
    <div className="p-20">
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
