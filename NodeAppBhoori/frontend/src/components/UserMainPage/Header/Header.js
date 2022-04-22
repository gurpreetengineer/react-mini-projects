import React from "react";
import { Layout, Menu, Typography, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { UserAllowance } from '../../Redux/AuthSlice';


const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const SiderDemo = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    history.push("/login");
    dispatch(UserAllowance({
      isUserLoggedIn: false,
      userToken: null,
    }));

    localStorage.setItem('isUserAuthenticated', false)
    localStorage.setItem('userToken', null)
  };

  return (
    <Layout>
      <Layout className="site-layout" style={{ background: 'white' }}>
        <Header className="site-layout-background" style={{ width: '100%', padding: 0, position: 'fixed', alignItems: 'center', display: 'flex', zIndex: 1000, justifyContent: 'space-between' }}>
          <Title level={2} style={{ color: "white", zIndex: 1000, marginTop: "12px", marginLeft: 40 }}>Photos </Title>
          <Button onClick={logOut} style={{ marginLeft: "700px", marginRight: 100 }}>Log Out</Button>
        </Header>
      </Layout>
    </Layout >
  );

}

export default SiderDemo;
