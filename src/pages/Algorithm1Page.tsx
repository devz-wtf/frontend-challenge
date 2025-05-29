import { Card, Input, Typography } from 'antd';
import { useState } from 'react';
import { reversePreserveNumber } from '../algorithms/algo1';

export default function Algorithm1Page() {
  const [input, setInput] = useState('NEGIE1');
  const result = reversePreserveNumber(input);

  return (
    <Card style={{ maxWidth: 500, margin: '2rem auto' }}>
      <Typography.Title level={3}>Soal 1: Reverse Huruf</Typography.Title>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <p style={{ marginTop: '1rem' }}>Hasil: <strong>{result}</strong></p>
    </Card>
  );
}
