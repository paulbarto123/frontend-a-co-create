import { Layout, Menu, Pagination, Divider } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined, FolderAddOutlined, MailOutlined, FolderOpenOutlined, FileAddOutlined, DatabaseOutlined, LogoutOutlined } from "@ant-design/icons";
import React from "react";
import "../style.css";
import Home from "../home/home";
import Project from "../project/project";
import MyArticles from "../myarticles/myarticles";
import CreateProject from "../createproject/createproject";

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            overflow: "auto",
            height: "auto",
            left: 0,
          }}
        >
          <div className="logo">
            <img src="https://www.indoneo.com/wp-content/uploads/2017/03/BRI_logo_WB.png" alt="logo" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Beranda
            </Menu.Item>
            <Menu.Item key="2" icon={<FolderAddOutlined />}>
              Buat Project Baru
            </Menu.Item>
            <Menu.Item key="3" icon={<FolderOpenOutlined />}>
              Project Saya
            </Menu.Item>
            <Menu.Item key="4" icon={<MailOutlined />}>
              Undangan Kolaborasi
            </Menu.Item>
            <Menu.Item key="5" icon={<FileAddOutlined />}>
              Post Artikel
            </Menu.Item>
            <Menu.Item key="6" icon={<DatabaseOutlined />}>
              Artikel Saya
            </Menu.Item>
            <Menu.Item key="7" icon={<LogoutOutlined />}>
              Keluar
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: this.toggle,
            })}
            Selamat Datang!
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Home />
            <Project />
            <MyArticles />
            <CreateProject />
          </Content>
          <Divider />
          <Pagination defaultCurrent={1} total={50} />
          <Divider />
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
