import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Input, message } from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { navigate } from "@reach/router";
import logo from '../assets/3333.jpg'
import { Spring } from 'react-spring/renderprops';
import { useSpring} from 'react-spring'
import { motion } from "framer-motion";



const { Search } = Input;

const { Header, Footer, Content } = Layout;

const { Title } = Typography;


const MainLayout1 = styled(Layout)`
  width: 100vw;
  height: 100vh;
  ;
`


function MainPage() {
  const [cards, setCards] = useState(false);
  const { user, signout, getCards } = useFirebase();
  const [elements, setElements] = useState([])



  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getCards()
        console.log(result.numChildren())
        result.forEach(element => {
          console.log(element.val().brand)
        });
        hasCards()
        console.log(cards)
      }
      catch (error) {
        console.log("this is error" + error)
      }
    }
    fetchData();
  }, [getCards]);

  const onLogoutClick = () => {
    try {
      signout();
    } catch (error) {
      console.log("error logging out");
    }
  };

  const onHomeClick =()=> {
    navigate("/")
  }

  
  const onCategoryClick =()=> {
    navigate("/categories")
  }


  const addnewCard = () => {
    try {
      navigate("/createCard")
    } catch{
      message("Error")
    }
  }
  const hasCards = () => {
    async function fetchData() {
      try {
        const result = await getCards()

        result.forEach(element => {
          console.log(element.val())
          elements.push(element.val());

        });
        console.log(elements)
        if (result.numChildren()) {
          setCards(true)
          console.log(result.numChildren())
          console.log(cards)

          return cards;
        }
        else {
          setCards(false)
        }
        return cards;
      }
      catch (error) {
        console.log("this is error" + error)
      }
    }
    fetchData();
  }

  if (cards) {
    return (
      <>
        <MainLayout1>



          <Header style={{ backgroundColor: '#FFECE7', height: '10%' }}>
            <div style={{ width: '100%', }}>
              <img alt="logo" src={logo} style={{ height: 60, marginLeft: -15, marginTop: 18 }} />
            </div>

            <Title style={{ color: "black", fontSize: 33, paddingLeft: 50, marginBottom: -45, marginTop: -68, fontFamily: 'Tinos' }}>SAVE</Title>
            <Title style={{ color: "black", fontSize: 33, paddingLeft: 50, fontFamily: 'Tinos' }}>SALE</Title>
            
            <div style={{ backgroundColor: '#FFECE7', width: '90%', height: '70%', display: 'flex', flexWrap: 'wrap', marginLeft: "15%", marginTop: -100 }}>
            <div style={{ width: '30%',height:45, marginLeft: '2%',marginTop:18}}>
            <Input
              placeholder="Find your discount"
              size="large"
              style ={{width:'100%',height:'100%'}}
            />
            </div>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: '5%'
                }}>
                <Button type="text" onClick={onHomeClick}>
                  <Title style={{ color: "black", fontSize: 25, fontFamily: 'TinosBoldItalic' }}>Home</Title>
                </Button>
              </div>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: '5%'
                }}>
                <Button type="text" onClick={onCategoryClick}>
                  <Title style={{ color: "black", fontSize: 25, fontFamily: 'TinosBoldItalic' }}>Categories</Title>
                </Button>
              </div>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: '5%'
                }}>
                <Button type="text">
                  <Title style={{ color: "black", fontSize: 25, fontFamily: 'TinosBoldItalic' }}>About</Title>
                </Button>
              </div>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: '5.5%'
                }}>
                <Button danger
                  style={{ backgroundColor: "#FFECE7", borderColor: "#CD8E7E" }}>
                  <Title style={{ color: "black", marginTop: -5, fontSize: 25, fontFamily: 'TinosBoldItalic' }}>Log In</Title>
                </Button>
              </div>
            </div>
          </Header>
          <Content style={{ backgroundColor: 'black', overflowY: 'auto', width: "100%", height: '80%' }}>
            <Title style={{ color: "#FFECE7", marginTop: 20, marginLeft: '45%', fontSize: 40, fontFamily: 'TinosBoldItalic' }}>My Wallet</Title>

            <div style={{ backgroundColor: 'black', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
              {elements.map(card => (
                <Spring
                  from={{ opacity: 0,  }}   // from marginTop:-500  to marginTop:0
                  to={{ opacity: 1, }}
                  config={{ delay: 100, duration: 500, mass: 5, tension: 350, friction: 40 }}>
                  {props => (
                    <div style={props}>
                      <motion.div
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}
                        style={
                          {
                            backgroundColor: '#FFECE7',
                            width: 400,
                            height: 250,
                            margin: 30,
                            borderRadius: "20px"
                          }}>
                        <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>{card.title}</Title>
                        <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Brand: </Title>
                        <Title style={{ color: "black", marginTop: -29, paddingLeft: 80, fontSize: 17, fontFamily: 'TinosBold' }}>{card.brand} </Title>
                        <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Category: </Title>
                        <Title style={{ color: "black", marginTop: -28, paddingLeft: 110, fontSize: 17, fontFamily: 'TinosBold' }}> {card.category} </Title>
                        <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Price: </Title>
                        <Title style={{ color: "black", marginTop: -28, paddingLeft: 70, fontSize: 17, fontFamily: 'TinosBold' }}> ${card.price} </Title>
                        <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description:</Title>
                        <Title style={{ color: "black", marginTop: -28, paddingLeft: 120, fontSize: 17, fontFamily: 'TinosBold' }}>{card.description}</Title>
                      </motion.div>
                    </div>
                  )}
                </Spring>
              ))}
              <Spring
                  from={{ opacity: 0,  }}   // from marginTop:-500  to marginTop:0
                  to={{ opacity: 1, }}
                  config={{ delay: 100, duration: 500, mass: 5, tension: 350, friction: 40 }}>
                  {props => (
                    <div style={props}>
              <motion.div
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}
                style={
                  {
                    backgroundColor: '#FFECE7',
                    width: 400,
                    height: 250,
                    margin: 30,
                    borderRadius: "20px"
                  }}>
                <Button danger onClick={addnewCard}
                  style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", marginTop: 100, marginLeft: 137 }}>
                  <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Add New</Title>
                </Button>
              </motion.div>
              </div>
              )}
                </Spring>
            </div>
          </Content>
          <Footer style={{ backgroundColor: '#FFECE7', height: '10%' }}></Footer>

        </MainLayout1>
      </>
    );
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
          <div
            style={{
              marginLeft: 1300,
              marginTop: -141
            }}>
            <Button type="text">
              <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Home</Title>
            </Button>
          </div>
          <div
            style={{
              marginLeft: 1500,
              marginTop: -64
            }}>
            <Button type="text">
              <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>About</Title>
            </Button>
          </div>
          <div
            style={{ width: 100, marginLeft: 1700, marginTop: -65 }}>
            <Button danger
              style={{ backgroundColor: "#FFECE7", borderColor: "#CD8E7E" }}>
              <Title style={{ color: "black", marginTop: -8, fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Log In</Title>
            </Button>
          </div>
        </Header>
        <Content style={{ backgroundColor: 'black', overflowY: 'auto' }}>
          <Title style={{ color: "#FFECE7", marginTop: 20, marginLeft: 850, fontSize: 40, fontFamily: 'TinosBoldItalic' }}>My Wallet</Title>
          <div style={{ backgroundColor: 'black', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
          <motion.div
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}
                style={
                  {
                    backgroundColor: '#FFECE7',
                    width: 400,
                    height: 250,
                    margin: 30,
                    borderRadius: "20px"
                  }}>
                <Button danger onClick={addnewCard}
                  style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", marginTop: 100, marginLeft: 137 }}>
                  <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Add New</Title>
                </Button>
              </motion.div>
          </div>
        </Content>
        <Footer style={{ backgroundColor: '#FFECE7', height: 90 }}></Footer>
      </MainLayout1>
    </>
  );
}

export default MainPage;
