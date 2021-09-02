import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Form, Input, PageHeader, message } from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { Link } from "@reach/router";
import logo from '../assets/3333.jpg'
import FacebookLoginWithButton from 'react-facebook-login';
import { useNavigate } from "@reach/router";





const { Header, Footer, Content } = Layout;
const { Search } = Input;

const responseFacebook = (response) => {
  console.log(response);
}

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;

`;

const TextLayout = styled.div``;


const { Title } = Typography;


function HomePage() {
  const { signInWithFacebook, login, user, userUpload } = useFirebase();
  const navigate = useNavigate();

  useEffect(function () {
    console.log(user)
    if (user) {
      navigate("/ss")
      userUpload(user);
    }
  }, [user, navigate])



  const onFormFinish = async (values) => {
    try {
      await login(values.email, values.password);
      message.success("Login is successful");
      navigate("/ss");

    } catch (error) {
      message.error(error.message);
    }
  };


  const onFormFinish1 = async () => {
    try {
      const result = await signInWithFacebook();
      message.success("Login is successful" + result);
      navigate("/ss");
    } catch (error) {
      message.error(error.message);
    }
  };
  console.log(responseFacebook)

  return (
    <>
      <MainLayout>
        <Header style={{ backgroundColor: '#FFECE7', height: 100 }}>
          <div style={{ width: 200, }}>
            <img alt="logo" src={logo} style={{ height: 60, marginLeft: -15, marginTop: 18 }} />
          </div>
          <Title style={{ color: "black", fontSize: 33, paddingLeft: 50, marginBottom: -45, marginTop: -68, fontFamily: 'Tinos' }}>SAVE</Title>
          <Title style={{ color: "black", fontSize: 33, paddingLeft: 50, fontFamily: 'Tinos' }}>SALE</Title>
          <Search
            placeholder="Find your discount"
            enterButton="Search"
            size="large"
            //suffix={suffix}
            onSearch={value => console.log(value)}
            style={{ width: 700, marginLeft: 300, marginTop: -70 }}
          />
         <div style= {{backgroundColor:'FFECE7', width:400, display: 'flex', flexWrap:'wrap'}}>
            <div
              style={{
                marginLeft: 1130,
                marginTop: -141
              }}>
              <Button type="text">
                <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Home</Title>
              </Button>
            </div>
            <div
              style={{
                marginLeft: 1470,
                marginTop: -141
              }}>
              <Button type="text">
                <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Categories</Title>
              </Button>
            </div>
            <div
              style={{
                marginLeft: 1300,
                marginTop: -141
              }}>
              <Button type="text">
                <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>About</Title>
              </Button>
            </div>
            <div
              style={{ width: 100, marginLeft: 1700, marginTop: -141}}>
              <Button danger
                style={{ backgroundColor: "#FFECE7", borderColor: "#CD8E7E" }}>
                <Title style={{ color: "black", marginTop: -8, fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Log In</Title>
              </Button>
            </div>
            </div>
        </Header>
        <Content style={{ backgroundColor: 'black' }}>
          <div
            style={
              {
                backgroundColor: '#FFECE7',
                width: 350,
                height: 380,
                margin: "auto",
                marginTop: 200,
                borderRadius: "20px"
              }}>
            <PageHeader title="Login" style={{ width: 115, margin: "auto" }} />
            <Form onFinish={onFormFinish} >
              <div
                style={{ width: 300, marginLeft: 20 }}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div
                style={{ width: 300, marginLeft: 20 }}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </div>
              <div style={{ marginLeft: 140 }}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Login
          </Button>
                </Form.Item>
              </div>
              <TextLayout
                style={{ marginLeft: 162, marginTop: -20 }}>
                OR
        </TextLayout>
              <div style={{ backgroundColor: '#FFECE7', width: 300, marginLeft: 30 }}>
                <FacebookLoginWithButton
                  appId="2699502363599338"
                  autoLoad
                  fields="name,email,picture"
                  onClick={onFormFinish1}
                  callback={responseFacebook}
                  icon="fa-facebook" />
              </div>
            </Form>
            <TextLayout
              style={{ marginLeft: 30, marginTop: 10 }}>
              Don't have login yet? Register <Link to="/register">here</Link>
            </TextLayout>
            <TextLayout
              style={{ marginLeft: 30 }}>
              Forgot password? <Link to="/passwordchange">Reset </Link>
            </TextLayout>
          </div>
        </Content>
        <Footer style={{ backgroundColor: '#FFECE7', height: 90 }}></Footer>

      </MainLayout>
    </>
  );
};

export default HomePage;
