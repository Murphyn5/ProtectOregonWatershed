import { Input, Textarea, Button, Spacer } from '@nextui-org/react';
// import { Input, TimePicker } from '@nextui-org/react';

export default function ArticleForm() {
  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}
      >
        Article Event Form
      </div>

      <Input fullWidth color="primary" size="lg" placeholder="Title" />
      <Spacer y={1} />

      <Input
        // bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Input Source"
      />
      <Spacer y={1} />

      <Input
        // clearable
        // bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Input Link"
      />
      <Spacer y={1} />

      <Input
        // bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Input date"
      />
      <Spacer y={1} />

      <Button color="primary" size="lg">
        Submit
      </Button>
    </div>
  );
}
