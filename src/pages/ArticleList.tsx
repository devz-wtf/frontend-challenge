import { useEffect, useState } from 'react';
import {
  Card,
  List,
  Typography,
  Image,
  Select,
  Switch,
  Spin,
} from 'antd';
import { Link } from 'react-router-dom';
import { getTopHeadlines } from '../infrastructure/articleRepository';
import '../index.css';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

export default function ArticleListPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('general');
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setLoading(true);
    getTopHeadlines(category, page).then((res) => {
      setArticles(res.articles);
      setTotalResults(res.totalResults);
      setLoading(false);
    });
  }, [category, page]);

  return (
    <div className={darkMode ? 'dark-mode' : ''} style={{ padding: '2rem' }}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}
      >
        <Title level={2} style={{ color: darkMode ? 'white' : undefined }}>
          📰 Berita Terkini
        </Title>
        <Switch
          checkedChildren="🌙"
          unCheckedChildren="☀️"
          onChange={(checked) => setDarkMode(checked)}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Select
          defaultValue={category}
          style={{ width: 200 }}
          onChange={(value) => {
            setCategory(value);
            setPage(1);
          }}
        >
          {categories.map((cat) => (
            <Option key={cat} value={cat}>
              {cat.toUpperCase()}
            </Option>
          ))}
        </Select>
      </div>

      {loading ? (
        <Spin tip="Loading articles..." />
      ) : (
        <List
          itemLayout="vertical"
          size="large"
          dataSource={articles}
          pagination={{
            pageSize: 5,
            current: page,
            total: totalResults,
            showSizeChanger: false,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} dari ${total} artikel`,
            onChange: (p) => setPage(p),
          }}
          renderItem={(item, index) => (
            <List.Item
              key={item.url}
              extra={
                <Image
                  width={200}
                  alt="thumbnail"
                  src={item.urlToImage || 'https://via.placeholder.com/200'}
                  fallback="https://via.placeholder.com/200"
                />
              }
            >
              <Card style={{ borderRadius: 16 }} bodyStyle={{ padding: '1rem' }} hoverable>
                <Link to={`/detail/${index}`} state={{ article: item }}>
                  <Title level={4} style={{ marginBottom: 8 }}>
                    {item.title}
                  </Title>
                </Link>
                <Text type="secondary">
                  {new Date(item.publishedAt).toLocaleString()}
                </Text>
                <Paragraph ellipsis={{ rows: 2 }}>{item.description}</Paragraph>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
