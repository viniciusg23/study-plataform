import * as React from 'react';
import "../App.css";
import "./style.css";

import Typewriter from "typewriter-effect";
import { Container, Theme } from '@mui/material';

interface MainBannerProps {
  matches: boolean
}



function MainBanner(props: MainBannerProps) {

  let theme: string = "bannerContainerLight";
  // props.theme.palette?.mode === "light" ? theme = "bannerContainerLight" : theme = "bannerContainerDark"
  
    
  return (
    <div className={theme} style={{
      height: 200, 
      display: "flex", 
      alignItems: "center"
    }}>
      <Container style={{textAlign: "center"}}>
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