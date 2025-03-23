import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, InfoCircleOutlined, ShoppingCartOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: <Link to="/">ชื่อ ผู้จัดทำ</Link>,
    },
    {
      key: '2',
      icon: <ShoppingCartOutlined/>,
      label: <Link to="/dataall">รายการสินค้า</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider style={{ background: "" }} collapsible collapsed={collapsed} onCollapse={setCollapsed}>
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
          AKA RoN 
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={menuItems} />
      </Sider>

      <Layout>
        {/* Header */}
        <Header style={{ padding: 0, color: "#fff", textAlign: "center" }}>
          <h1 style={{ margin: 30, fontSize: "20px" }}>... Test IT-PKVC 2025 ...</h1>
        </Header>

        {/* Content */}
        <Content style={{ margin: "16px", padding: "24px", background: "#fff", borderRadius: "8px" }}>
          {children}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>© Asron Doloh 6649010031 </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
