import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Form, Input, PageHeader, message } from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { Link } from "@reach/router";
import logo from '../assets/3333.jpg'
import FacebookLoginWithButton from 'react-facebook-login';
import { navigate } from "@reach/router";
import clothes from '../assets/clothes.webp'
import accessories from '../assets/accessories.jpg'
import cosmetics from '../assets/cosmetics.jpg'
import otherthings from '../assets/other_things.png'
import services from '../assets/services.jpg'
import travel from '../assets/travel.jpeg'


const { Header, Footer, Content } = Layout;
const { Search } = Input;

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;

`;

const onHomeClick =()=> {
  navigate("/")
}


const onCategoryClick =()=> {
  navigate("/categories")
} 

const TextLayout = styled.div``;


const { Title } = Typography;

function Categories(){

 
    return (
        <>
          <MainLayout style ={{overflowY: 'auto'}}>
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
                  <Button type="text"  onClick={onHomeClick}>
                    <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Home</Title>
                  </Button>
                </div>
                <div
                  style={{
                    marginLeft: 1470,
                    marginTop: -141
                  }}>
                  <Button type="text"  onClick={onCategoryClick}> 
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
            <Title style={{ color: "#FFECE7", marginTop: 20, marginLeft: 850, fontSize: 40, fontFamily: 'TinosBoldItalic' }}>Categories</Title>
            <Title style={{ color: "#FFBAA4", marginTop: -20, marginLeft: 750, fontSize: 25, fontFamily: 'TinosBoldItalic' }}>Your Hunt for Any Sales Starts Here...</Title>

            <div style= {{backgroundColor:'black', width:'56%', marginLeft:478,marginTop:-10, display: 'flex', flexWrap:'wrap'}}>
            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 270,
                  height: 270,
                  margin:20,
                  borderRadius: "20px"
                }}>
         <img alt="logo" src={clothes} style={{ height:"85%", width:"100%",borderRadius:"20px", borderBottomRightRadius:"0px", borderBottomLeftRadius:"0px"}} />
              <Button danger 
                style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", width:'100%', borderRadius:"20px" }}>
                <Title style={{ color: "black", fontSize: 27, fontFamily: 'TinosBold' }}>CLOTHES </Title>
              </Button>
            </div>
            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 270,
                  height: 270,
                  margin:20,
                  borderRadius: "20px"
                }}>
                        <img alt="logo" src={cosmetics} style={{ height:"85%", width:"100%",borderRadius:"20px", borderBottomRightRadius:"0px", borderBottomLeftRadius:"0px"}} />
              <Button danger 
                style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", width:'100%', borderRadius:"20px" }}>
                <Title style={{ color: "black", fontSize: 27, fontFamily: 'TinosBold' }}>COSMETICS</Title>
              </Button>
            </div>
            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 270,
                  height: 270,
                  margin:20,
                  borderRadius: "20px"
                }}>
                 <img alt="logo" src={accessories} style={{ height:"85%", width:"100%",borderRadius:"20px", borderBottomRightRadius:"0px", borderBottomLeftRadius:"0px"}} />
              <Button danger 
                style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", width:'100%', borderRadius:"20px" }}>
                <Title style={{ color: "black", fontSize: 27, fontFamily: 'TinosBold' }}>ACCESSORIES</Title>
              </Button>
            </div>
            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 270,
                  height: 270,
                  margin:20,
                  borderRadius: "20px"
                }}>
                 <img alt="logo" src={travel} style={{ height:"85%", width:"100%",borderRadius:"20px", borderBottomRightRadius:"0px", borderBottomLeftRadius:"0px"}} />
              <Button danger 
                style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", width:'100%', borderRadius:"20px" }}>
                <Title style={{ color: "black", fontSize: 27, fontFamily: 'TinosBold' }}>TRAVEL</Title>
              </Button>
            </div>
            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 270,
                  height: 270,
                  margin:20,
                  borderRadius: "20px"
                }}>
                <img alt="logo" src={services} style={{ height:"85%", width:"100%",borderRadius:"20px", borderBottomRightRadius:"0px", borderBottomLeftRadius:"0px"}} />
              <Button danger 
                style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", width:'100%', borderRadius:"20px" }}>
                <Title style={{ color: "black", fontSize: 27, fontFamily: 'TinosBold' }}>SERVICES</Title>
              </Button>
            </div>

            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 270,
                  height: 270,
                  margin:20,
                  borderRadius: "20px"
                }}>
               <img alt="logo" src={otherthings} style={{ height:"85%", width:"100%",borderRadius:"20px", borderBottomRightRadius:"0px", borderBottomLeftRadius:"0px"}} />
              <Button danger 
                style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", width:'100%', borderRadius:"20px" }}>
                <Title style={{ color: "black", fontSize: 27, fontFamily: 'TinosBold' }}>OTHER</Title>
              </Button>

            </div>
            </div>
            </Content>
            <Footer style={{ backgroundColor: '#FFECE7', height: 90 }}></Footer>
    
          </MainLayout>
        </>
      );
    };
    
    export default Categories;
    
