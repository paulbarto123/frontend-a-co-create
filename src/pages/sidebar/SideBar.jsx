import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UsergroupDeleteOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Enrollment from "../enrollment/Enrollment";

const { Header, Sider, Content } = Layout;
const MenuIcon = (collapse, onClick) => {
  switch (collapse) {
    case collapse:
      return (
        <MenuUnfoldOutlined
          width="40px"
          height="40px"
          color="#fff"
          className="trigger"
          onClick={onClick}
        />
      );

    case !collapse:
      return (
        <MenuFoldOutlined
          width="40px"
          height="40px"
          color="#fff"
          className="trigger"
          onClick={onClick}
        />
      );
    default:
      return null;
  }
};
const SideBar = () => {
  const [collapse, setCollapse] = React.useState(false);

  const handleToggle = React.useCallback(() => {
    setCollapse(!collapse);
  }, [collapse]);

  return (
    <Layout>
      <Sider
        style={{
          backgroundColor: "#027AF5",
          minHeight: "100vh",
          paddingTop: "35px",
        }}
        trigger={null}
        collapsible
        collapsed={collapse}
      >
        <div
          className="menu_header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {collapse ? null : (
            <h1
              className="logo"
              style={{
                fontSize: "36px",
                fontStyle: "bold",
                color: "#fff",
                paddingLeft: "10px",
              }}
            >
              MyBank
            </h1>
          )}

          <div
            style={{
              backgroundColor: "#027AF5",
              padding: 0,
              margin: 0,
            }}
            className="site-layout-background"
          >
            {React.createElement(
              collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: handleToggle,
                style: {
                  marginRight: 0,
                  marginLeft: "30px",
                  fontSize: "25px",
                  color: "#fff",
                },
              }
            )}
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            style={{
              color: "#fff",
              fontSize: "15px",
            }}
            key="1"
            icon={<UsergroupDeleteOutlined />}
          >
            Enrollment Request
          </Menu.Item>
          <Menu.Item
            style={{
              color: "#fff",
              fontSize: "15px",
            }}
            key="2"
            icon={<LogoutOutlined />}
          >
            Keluar
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            minHeight: 750,
            padding: "24px",
            marginBottom: 0,
          }}
        >
          <Enrollment />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
