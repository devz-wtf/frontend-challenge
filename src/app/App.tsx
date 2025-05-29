import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import ArticleList from '../pages/ArticleList';
import ArticleDetail from '../pages/ArticleDetail';
import Algorithm1Page from '../pages/Algorithm1Page';
import Algorithm2Page from '../pages/Algorithm2Page';
import Algorithm3Page from '../pages/Algorithm3Page';
import Algorithm4Page from '../pages/Algorithm4Page';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function NavigationMenu() {
  const location = useLocation();

  const selectedKey = (() => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/algorithms/1')) return 'alg1';
    if (location.pathname.startsWith('/algorithms/2')) return 'alg2';
    if (location.pathname.startsWith('/algorithms/3')) return 'alg3';
    if (location.pathname.startsWith('/algorithms/4')) return 'alg4';
    if (location.pathname.startsWith('/detail')) return 'home';
    return '';
  })();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[selectedKey]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="alg1">
        <Link to="/algorithms/1">Algoritma 1</Link>
      </Menu.Item>
      <Menu.Item key="alg2">
        <Link to="/algorithms/2">Algoritma 2</Link>
      </Menu.Item>
      <Menu.Item key="alg3">
        <Link to="/algorithms/3">Algoritma 3</Link>
      </Menu.Item>
      <Menu.Item key="alg4">
        <Link to="/algorithms/4">Algoritma 4</Link>
      </Menu.Item>
    </Menu>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <div style={{ float: 'left', color: 'white', marginRight: 24 }}>
            <Title level={3} style={{ color: 'white', margin: 0, lineHeight: '64px' }}>
              React Test Case
            </Title>
          </div>
          <NavigationMenu />
        </Header>

        <Content style={{ padding: '24px 50px', background: '#fff' }}>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/detail/:id" element={<ArticleDetail />} />
            <Route path="/algorithms/1" element={<Algorithm1Page />} />
            <Route path="/algorithms/2" element={<Algorithm2Page />} />
            <Route path="/algorithms/3" element={<Algorithm3Page />} />
            <Route path="/algorithms/4" element={<Algorithm4Page />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          ©2025 Defana Aditya - Test React Case
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}
