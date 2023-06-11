import * as React from 'react';
import "../App.css";
import "./style.css";

import Typewriter from "typewriter-effect";
import { Container } from '@mui/material';


function MainBanner(props: {matches: boolean}) {

  if(props.matches){
    return (
      <div className='bannerContainer'>
        <img className='bannerImg' src="/logo.png"></img>
      </div>
    );
  }
  
  return (
    <div className='bannerContainer' style={{height: 200}}>
      <Container style={{display: "flex", justifyContent: "center"}}>
        <Typewriter
          options={{loop: true}}
          onInit={(typewriter)=> {
            typewriter
            
            .typeString("CraftingCode")
              
            .pauseFor(1500)
            .deleteAll()
            .typeString("Hello World!")

            .pauseFor(1500)
            .deleteAll()
            .typeString("Start Coding")

            .pauseFor(1500)
            .deleteAll()
            .typeString("Be a Developer")

            .pauseFor(1500)
            .deleteAll()
            .typeString("Let's Study")

            .pauseFor(1500)
            .deleteAll()
            .typeString("Drink Coffe!")
 
            .start();
          }}
        />
      </Container>
    </div>
  );
  
}

export default MainBanner;