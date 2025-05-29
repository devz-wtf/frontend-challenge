import { Card, Input, Typography } from 'antd';
import { useState } from 'react';
import { longestWord } from '../algorithms/algo2';

export default function Algorithm2Page() {
  const [sentence, setSentence] = useState('Saya sangat senang mengerjakan soal algoritma');
  const result = longestWord(sentence);

  return (
    <Card style={{ maxWidth: 500, margin: '2rem auto' }}>
      <Typography.Title level={3}>Soal 2: Kata Terpanjang</Typography.Title>
      <Input value={sentence} onChange={(e) => setSentence(e.target.value)} />
      <p style={{ marginTop: '1rem' }}>Hasil: <strong>{result}</strong></p>
    </Card>
  );
}
