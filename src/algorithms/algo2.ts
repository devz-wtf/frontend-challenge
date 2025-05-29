export function longestWord(sentence: string): string {
  const words = sentence.split(' ');
  return words.reduce((a, b) => (b.length > a.length ? b : a));
}