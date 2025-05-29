export function diagonalDiff(matrix: number[][]): number {
  const n = matrix.length;
  let d1 = 0, d2 = 0;
  for (let i = 0; i < n; i++) {
    d1 += matrix[i][i];
    d2 += matrix[i][n - 1 - i];
  }
  return Math.abs(d1 - d2);
}
