import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import RegisterPage from "./page/RegisterPage";
import UserPage from "./page/UserPage";
import MoviePage from "./page/MoviePage";
import PythonPage from "./page/PythonPage";
// import Header from "./component/Header";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/register">Register</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/user">User List</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/movie">Movie</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/python">Python</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          {/** 라우팅 */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/python" element={<PythonPage />} />
          </Routes>
          {/** 라우팅 */}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Header />

    // </BrowserRouter>
  );
}

export default App;
