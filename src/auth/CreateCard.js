import React from "react";
import styled from "styled-components";
import { Upload, Form, Input, Button, message, Layout, PageHeader, Space, Select, InputNumber, Typography } from "antd";
import { Link, navigate } from "@reach/router";
import { useFirebase } from "../firebase/useFirebase";
import logo from '../assets/3333.jpg'
import { UploadOutlined } from '@ant-design/icons';




const { Option } = Select;

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  }
};

function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChangeNumber(value) {
  console.log('changed', value);
}
const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const MainLayout1 = styled(Layout)`
  width: 100vw;
  height: 100vh;
  ;
`
const MyHeader = styled(PageHeader)`
width:1000px;
`;

function onCancelClick() {
  navigate("/")
}


function CreateCard({ onCancel }) {
  const { createCard } = useFirebase();
  const onFinish = (values) => {
    createCard(values);
    message.success("Succesfully created!")
    navigate("/")

  }

  return (
    <>
      <MainLayout1>
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
                width: 400,
                height: 500,
                margin: "auto",
                marginTop: 105,
                borderRadius: "20px"
              }}>
            <MyHeader style={{ marginLeft: 25, width: 250 }} title="Create new card" />
            <Form onFinish={onFinish} initialValues={{
              category: "Other",
              price: 0,
              description: "",
              image: {
                defaultFileList: [
                  {
                    uid: '1',
                    name: 'xxx.png',
                    status: 'done',
                    response: 'Server Error 500', // custom error message to show
                    url: 'http://www.baidu.com/xxx.png',
                  }]
              }

            }}>
              <Form.Item
                name="title"
                label="Title"
                style={{ marginLeft: 50, width: 300 }}
                rules={[
                  {
                    required: true,
                    message: "Please input card title",
                  },
                ]}>

                <Input />
              </Form.Item>
              <Form.Item
                name="brand"
                label="Brand"
                style={{ marginLeft: 40, width: 310 }}
                rules={[
                  {
                    required: true,
                    message: "Please input a brand",
                  },
                ]}>

                <Input />
              </Form.Item>
              <Form.Item
                name="category"
                label="Category"
                style={{ marginLeft: 31 }}
              >
                <Select style={{ width: 120, marginLeft: 0 }} onChange={handleChange}>
                  <Option value="Cosmetics">Cosmetics</Option>
                  <Option value="Clothes">Clothes</Option>
                  <Option value="Accessories">Accessories</Option>
                  <Option value="Travel">Travel</Option>
                  <Option value="Services">Services</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="price"
                label="Price"
                style={{ marginLeft: 56 }}>
                <InputNumber min={0} max={300} onChange={onChangeNumber} />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                style={{ marginLeft: 17 }}
              >
                <Input.TextArea style={{ width: 250 }} />
              </Form.Item>
              <Form.Item style={{ marginLeft: 48 }}
                name="image"
                label="Image">
                <Upload {...props}>
                  <Button>
                    <UploadOutlined /> Upload
                        </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                style={{ marginTop: 30 }}>
                <Space>
                  <Button style={{ marginLeft: 100 }} type="primary" htmlType="submit">
                    Create Card
                </Button>
                  <Button onClick={onCancelClick}>Cancel</Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ backgroundColor: '#FFECE7', height: 90 }}></Footer>
      </MainLayout1>
    </>
  )
}

export default CreateCard;
//<Input.TextArea/>
//<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />