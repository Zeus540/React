import React, {Component} from 'react';
import styled from 'styled-components';
import back from '../images/back.png'
import forward from '../images/right.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

import af2 from '../images/test.png';
import { NavLink} from "react-router-dom";

const Container = styled.div`
background: linear-gradient(45deg,#495b5e,#7b0113);
  overflow:hidden;
  position:relative;
  display: flex;
  min-width:100vw;
  @media  (min-width: 1px) and (max-width: 425px) {
    overflow:unset;
    min-width:unset;
    }
  @media  (min-width: 426px) and (max-width: 768px) {
  overflow:unset;
  min-width:unset;
  }
  @media  (min-width: 769px) and (max-width: 1024px) {
    min-width: unset;
    overflow:unset;
  }
  @media  (min-width: 1025px) and (max-width: 1440px) {
    min-width:100vw;
    overflow:unset;
  }
`

const LeftContainer = styled.div`
height:100vh;

overflow-x: hidden;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  width: 30vw;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width: 125vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 55vw;
  }
 
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 40vw;
  }
  
`


const RightContainer = styled.div`
  min-width: 60vw;
  height: 100vh;
  float:right;
  position:relative;
  
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:200vw;
    margin-right: 10vw;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    min-width: 110vw;
    margin-right: 10vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    min-width: 60vw;
    margin-right: 10vw;
  }
`


const Img = styled.img`
width: 25vw;
height: 20vw;
border: none;
position: relative;
z-index: 2;
left: 100px;
@media  (min-width: 1px) and (max-width: 425px) {
  width: 80vw;
  height: 75vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  width: 45vw;
  height: 45vw;
  left: 125px;
}

`   


const TextContainer =styled.div`
width: 100%;
font-size: 1.1vw;
overflow-y: auto;
@media  (min-width: 1px) and (max-width: 425px) {
  width: 128vw;
  position: relative;
  top: 0vw;
  left: 0vw;
  font-size: 6vw;
}

@media  (min-width: 426px) and (max-width: 768px) {
  width: 100%;
  position: relative;
  top: 0vw;
  font-size: 2.5vw;
}
@media  (min-width: 769px) and (max-width: 1240px) {
  top: 25vw;
  width: 100%;
  left: 200px;
}
`

const Text = styled.p`
  color:white;
  margin:0vw 2vw 2vw 2vw;
  text-align:justify;
  line-height:2vw;
  @media  (min-width: 1px) and (max-width: 425px) {
    padding: 0vw 1vw 5vw 8vw;
    line-height:8vw;
    position: relative;
    width: unset;
    text-align:left;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    padding:0vw 4vw 4vw 4vw;
    line-height:4vw;
  }
  @media  (min-width: 769px) and (max-width: 1240px) {
    line-height:3vw;
  }
`

const Floating = styled.div`
color:white;
top: 4.5vw;
left: 20vw;
white-space:nowrap;
font-family:arial;
font-weight:bold;
z-index:10;
@media (max-width: 425px){
  font-size:20vw;
  letter-spacing: 1vw;
  top: 21vw;
  left: 94vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  top:10vw;
  left: 40vw;
}

`

const Text1 = styled.h1`
color:#ffffff;
font-size:6vw;
margin-top: 3vw;
letter-spacing:6px;
margin-left: 0vw;
white-space: nowrap;
position:relative;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 25vw;
  margin: 15vw;
  margin-bottom: 0;
  margin-top: 25vw;
  margin-left: 0vw;
}

@media  (min-width: 426px) and (max-width: 480px) {
  font-size:10vw;
  bottom: -10vw;
  margin-bottom: 6vw;
}
@media  (min-width: 481px) and (max-width: 768px) {
  font-size:10vw;
  bottom: -7vw;
  margin-bottom: 6vw;
}
@media  (min-width: 769px) and (max-width: 1024px) {
  font-size:10vw;
  bottom: -3vw
  margin-top: 5vw;
  margin-bottom: 3vw; 
}
@media  (min-width: 1025px) and (max-width: 1440px) {
  font-size:10vw;
  bottom: -3vw
  margin-top: 2vw;
  margin-bottom: 3vw;

}
`
const Text2 = styled.h1`
margin:0px;
position:absolute;
color:white;
font-size:7vw;
right: -8vw;
bottom: -12px;
margin: 15vw;
margin-bottom: 0;
letter-spacing:6px;
white-space: nowrap;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 22vw;
  margin: 15vw;
  margin-bottom: 0;
  bottom: -30px;
  right: 15vw;
 
}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size: 10vw;
  bottom: -30px;
  right: -3vw;
}
`


const ShoeHolder = styled.div`
position: absolute;
display:flex;
top:50%
    left: 50%;
    transform: translate(-50%, -50%);
@media  (min-width: 1px) and (max-width: 425px) {
  
}
@media  (min-width: 426px) and (max-width: 768px) {
 
}
@media  (min-width: 769px) and (max-width:1024px) {
 
}
@media  (min-width: 1025px) and (max-width: 1440px) {
 
}
`
    
const Ul =styled.ul`
padding-right: 10vw;
position: relative;
z-index: 50;
display: flex;
margin: 0vw 2vw 2vw 2vw;
}
`
const Li =styled.li`
padding: 2vw 1vw;
padding-bottom:0vw;
font-family:arial

@media  (min-width: 1px) and (max-width: 425px) {
  padding: 7vw 1vw 5vw 9vw;
padding-bottom:0vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  padding: 3vw 3vw;
  padding-bottom:0vw;
}
@media  (min-width: 769px) and (max-width:1024px) {
  padding: 3vw 3vw;
  padding-bottom:0vw;
}
@media  (min-width: 1025px) and (max-width: 1440px) {
 
}
`
class Page1 extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1500
    })
  }
render() {


    return (
      <Container >
        

        <LeftContainer className=" slide">
          <Ul>
            <Li>
        <NavLink to="/" exact>
         <img src={back} alt=""/>
          </NavLink>
          </Li>
          <Li>
        <NavLink to="/Page2" exact>
        <img src={forward} alt=""/>
          </NavLink>
          </Li>
          </Ul>
        <Text1  className="text-pop-up-tr" >"NIKE"</Text1>
        
          <TextContainer>
         
          <Text >The AF1 React D/MS/X optimizes comfort with a full length Nike React midsole equipped with a heel Ramp Air unit. The upper features a large bold Swoosh and mesh construction on the side panels. The traditional AIR logo appears on the heel, along with a newly added Nike React branded stripe. Nike React’s pattern replaces the traditional stars at the heel and toe of the outsole.</Text>
          </TextContainer>

        </LeftContainer>

        <RightContainer  >
    
        <ShoeHolder  className=" shoe">
          <Img src={af2} alt="" className=" zoom"/>
          </ShoeHolder>
          <Floating>
         
          <Text2 className="text-pop-up-tr">"AF1 REACT"</Text2>
        </Floating>
        </RightContainer>

      </Container>
      
  );
  }
}

export default Page1;