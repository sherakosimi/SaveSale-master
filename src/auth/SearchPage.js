import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Form, Input, Space, message, Switch, Radio } from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { Link, navigate } from "@reach/router";
import logo from '../assets/3333.jpg'
import space from '../assets/4444.jpg'



function onChangeCosmetics(checked) {
  console.log(`switch to ${checked}`);
}


const { Search } = Input;

const { Header, Footer, Content } = Layout;

const { Title } = Typography;



const MainLayout1 = styled(Layout)`
  width: 100vw;
  height: 100vh;
  ;
`
function SearchPage() {
  const [value, setValue] = useState(0)

  function onChange(e){
    console.log('radio checked', e.target.value);
    setValue(e.target.value)
  };
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
        <Content style={{backgroundColor:'black'}}>
          <Title style={{ color: "#FFECE7", marginTop: 20, marginLeft: 900, fontSize: 40, fontFamily: 'TinosBold' }}>Results</Title>
          <div style={{ backgroundColor: '#FFDBCF', width: 1450, height: 600, marginLeft: 460,overflowY:'auto'  }}>
          <div style= {{ backgroundColor: 'black',width:'100%', display: 'flex', flexWrap:'wrap'}}>
            <div
              style={
                {backgroundColor: '#FFECE7',
                  width: 400,
                  height: 250,
                  margin:30,
                  borderRadius: "20px"
                }}>
               <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>ID: 42574385473834</Title>
              <Title style={{ color: "black", paddingTop: -2, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Name: </Title>
              <Title style={{ color: "black", marginTop: -29, paddingLeft: 80, fontSize: 17, fontFamily: 'TinosBold' }}>Adidas </Title>
              <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Type: </Title>
              <Title style={{ color: "black", marginTop: -28, paddingLeft: 70, fontSize: 17, fontFamily: 'TinosBold' }}>Free </Title>
              <Title style={{ color: "black", paddingTop: -35, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description:</Title>
              <Title style={{ color: "black", marginTop: -28, paddingLeft: 120, fontSize: 17, fontFamily: 'TinosBold' }}>Don't spend any penny for this 10% discount</Title>
            </div>
            <div
              style={
                {backgroundColor: '#FFECE7',
                  width: 400,
                  height: 250,
                  margin:30,
                  borderRadius: "20px",
                  border:'black'
                }}>
               <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>ID: 42574385473889</Title>
              <Title style={{ color: "black", paddingTop: -2, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Name: </Title>
              <Title style={{ color: "black", marginTop: -29, paddingLeft: 80, fontSize: 17, fontFamily: 'TinosBold' }}>Amazon %5 Discount </Title>
              <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Type: </Title>
              <Title style={{ color: "black", marginTop: -28, paddingLeft: 70, fontSize: 17, fontFamily: 'TinosBold' }}>Free </Title>
              <Title style={{ color: "black", paddingTop: -35, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description:</Title>
              <Title style={{ color: "black", marginTop: -28, paddingLeft: 120, fontSize: 17, fontFamily: 'TinosBold' }}>I just want to share with my student discount</Title>
            </div>
            <div
              style={
                {backgroundColor: '#FFECE7',
                  width: 400,
                  height: 250,
                  margin:30,
                  borderRadius: "20px"
                }}>
               <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>ID: 76574385473834</Title>
              <Title style={{ color: "black", paddingTop: -2, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Name: </Title>
              <Title style={{ color: "black", marginTop: -29, paddingLeft: 80, fontSize: 17, fontFamily: 'TinosBold' }}>Adidas %20 Gold Card</Title>
              <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Type: </Title>
              <Title style={{ color: "black", marginTop: -28, paddingLeft: 70, fontSize: 17, fontFamily: 'TinosBold' }}>$10 </Title>
              <Title style={{ color: "black", paddingTop: -35, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description:</Title>
              <Title style={{ color: "black", marginTop: -28, paddingLeft: 120, fontSize: 17, fontFamily: 'TinosBold' }}>Save up to %20 of your purchace</Title>
            </div>
            
            <div
              style={
                {backgroundColor: '#FFECE7',
                  width: 400,
                  height: 250,
                  margin:30,
                  borderRadius: "20px"
                }}>
               <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>ID: 82354385473845</Title>
              <Title style={{ color: "black", paddingTop: -2, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Name: </Title>
              <Title style={{ color: "black", marginTop: -29, paddingLeft: 80, fontSize: 17, fontFamily: 'TinosBold' }}>Uber Promocode </Title>
              <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Type: </Title>
              <Title style={{ color: "black", marginTop: -28, paddingLeft: 70, fontSize: 17, fontFamily: 'TinosBold' }}>$5 </Title>
              <Title style={{ color: "black", paddingTop: -35, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description:</Title>
              <Title style={{ color: "black", marginTop: -28, paddingLeft: 120, fontSize: 17, fontFamily: 'TinosBold' }}>Use my %10 discount on Uber that I got from my company</Title>
            </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#FFECE7", width: 470, height: 600, marginTop: -600, marginLeft: -27 }}>
          <Title style={{ color: "black", paddingLeft:205, paddingTop:20,fontSize: 32, fontFamily: 'TinosBold' }}>Filters</Title>
          <div style ={{marginTop:40, marginLeft:70}}>
          <Title style={{color:'black', fontSize:23, fontFamily: 'TinosBold'}}>Cosmetics</Title>
          <Title style={{color:'black', fontSize:23, marginTop:25, fontFamily: 'TinosBold'}}>Clothes</Title>
          <Title style={{color:'black', fontSize:23, marginTop:25, fontFamily: 'TinosBold'}}>Accessories</Title>
          <Title style={{color:'black', fontSize:23, marginTop:25, fontFamily: 'TinosBold'}}>Travel</Title>
          <Title style={{color:'black', fontSize:23, marginTop:25, fontFamily: 'TinosBold'}}>Services</Title>
          <Title style={{color:'black', fontSize:23,  marginTop:25, fontFamily: 'TinosBold'}}>Other</Title>
          </div>
          <div style ={{width:50,marginTop:-313}}>
             <Space direction="vertical" size="large">
              <Switch style={{marginLeft:380, marginTop:8}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:380, marginTop:8}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:380,marginTop:8}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:380,marginTop:8}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:380,marginTop:8}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:380,marginTop:8}} defaultChecked onChange={onChangeCosmetics} />
              </Space>
              <Radio.Group style={{marginLeft:70, marginTop:20, width:200}} defaultValue={value} onChange={onChange} value={value}>
                 <Radio style ={{fontSize:23, fontFamily:'TinosBold', color:"black"}} value={1}>Free</Radio>
                  <Radio style ={{fontSize:23, fontFamily:'TinosBold',color:"black"}}  value={2}>Premium</Radio>
                  <Radio style ={{fontSize:23, fontFamily:'TinosBold',color:"black"}}  value={3}>All</Radio>
               </Radio.Group>
          </div>
             </div>
        </Content>
        <Footer style={{ backgroundColor: '#FFECE7', height: 85}}></Footer>
      </MainLayout1>
    </>
  );
}




export default SearchPage;
//<div style = {{ backgroundColor:"#FFECE7", width: 600, height:600}}>
//</div>
//<div style={{backgroundColor:'green', width:100, paddingBottom:400, marginLeft:800}}>
 //               </div>