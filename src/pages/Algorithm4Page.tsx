import { Card, Typography } from 'antd';
import { diagonalDiff } from '../algorithms/algo4';

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]
];

const result = diagonalDiff(matrix);

export default function Algorithm4Page() {
  return (
    <Card style={{ maxWidth: 500, margin: '2rem auto' }}>
      <Typography.Title level={3}>Soal 4: Selisih Diagonal</Typography.Title>
      <p><b>Matrix:</b></p>
      <pre>{JSON.stringify(matrix, null, 2)}</pre>
      <p><b>Hasil:</b> {result}</p>
    </Card>
  );
}
