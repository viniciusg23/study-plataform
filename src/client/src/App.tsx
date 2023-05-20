import './App.css';
import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Paper, Typography } from '@mui/material';
import MainBanner from './components/MainBanner';
import Body from './components/Body';
import InfoSection from './components/InfoSection';
import Module from './components/Module';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const banner = {
  image: "https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg?w=996&t=st=1684600205~exp=1684600805~hmac=62daee99ae6c9d0dfa4f9661f318f2493f000f74c33d2d86f82a23ebd7b94248",
  imageText: "Banner de apresentação da plataforma",
  title: "<Crafting Code/>"
}



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/module/all");
        const jsonData = await response.json();

        for(const item of jsonData.modules){
          delete item._id;
          delete item.createdAt;
          delete item.updatedAt;
          delete item.__v;
        }

        setData(jsonData.modules);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Body>
      <div className="App" >

      <ThemeProvider theme={darkTheme}>
        <NavBar/>
        <MainBanner banner={banner}></MainBanner>

        <Container>
          <InfoSection></InfoSection>
          <Typography component="h2" variant="h4" style={{textAlign: 'left', fontWeight: "600", color: "white"}}>{"Módulos 📚"}</Typography>
          
          <div style={{marginTop: 20}}>
            
            {data.map((item, index) => (
              <div key={index}>
                
                {<Module module={item}></Module>}
              </div>
            ))}

          </div>
          
        </Container>

      </ThemeProvider>
      </div>  
    </Body>
    
    

    
  );


 
}

export default App;
