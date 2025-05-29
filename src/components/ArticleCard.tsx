import { Card } from 'antd';

const ArticleCard = ({ article, onClick}: { article: any; onClick: () => void }) => (
    <Card hoverable style={{ marginBottom:16 }} onClick={onClick} cover={<img src={article.urlToImage} alt="thumbnail" />}>
        <Card.Meta title={article.title} description={article.description} />
    </Card>
);

export default ArticleCard;