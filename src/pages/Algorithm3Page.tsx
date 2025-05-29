import { Card, Typography } from 'antd';
import { countQuery } from '../algorithms/algo3';

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
const result = countQuery(input, query);

export default function Algorithm3Page() {
  return (
    <Card style={{ maxWidth: 500, margin: '2rem auto' }}>
      <Typography.Title level={3}>Soal 3: Hitung Query</Typography.Title>
      <p><b>INPUT:</b> {JSON.stringify(input)}</p>
      <p><b>QUERY:</b> {JSON.stringify(query)}</p>
      <p><b>OUTPUT:</b> {JSON.stringify(result)}</p>
    </Card>
  );
}
