import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false); // ใช้เพื่อพับ/ขยาย Sidebar

  // Menu items using the 'items' prop
  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '2',
      icon: <InfoCircleOutlined />,
      label: <Link to="/about">About</Link>,
    },
    {
      key: '3',
      icon: <InfoCircleOutlined />,
      label: <Link to="/books">Books</Link>,
    },
    {
      key: '4',
      icon: <InfoCircleOutlined />,
      label: <Link to="/dataall">dataall</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          style={{
            height: 64,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            textAlign: "center",
            lineHeight: "64px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          LOGO
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={menuItems} />
      </Sider>

      <Layout>
        {/* Header */}
        <Header style={{ padding: 0, background: "#001529", color: "#fff", textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "20px" }}>Supabase App</h1>
        </Header>

        {/* Content */}
        <Content style={{ margin: "16px", padding: "24px", background: "#fff", borderRadius: "8px" }}>
          {children}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>© 2025 Supabase App</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
