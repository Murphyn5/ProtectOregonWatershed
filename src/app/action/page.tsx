import React from 'react';
import { Button } from '@nextui-org/react';
// import Test from '../components/test_component/test';

export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Call to action page</h1>
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
      {/* <Test /> */}
    </div>
  );
}
