
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../domain/usecases/GetArticles';
import { Card } from 'antd';

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    fetchArticles().then((articles) => setArticle(articles[parseInt(id || '0')]));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <Card title={article.title} cover={<img src={article.urlToImage} alt="" />}>
      <p>{article.content}</p>
      <p><i>{article.publishedAt}</i></p>
      <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
    </Card>
  );
}
