import '../App.css';
import { useEffect, useState } from "react";
import { 
  ThemeProvider, 
  createTheme, 
  Container, 
  Typography, 
  Box, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import NavBar from '../components/NavBar';
import MainBanner from '../components/MainBanner';
import Body from '../components/Body';
import Module from '../components/Module';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


interface ModuleItem {
  _id: string
  title: string
  subtitle: string
  logo: string
  createdAt: string
  updatedAt: string
  __v: number
}

// const m: ModuleItem = {
//   _id: "",
//   title: "Programação em C",
//   subtitle: "Aprenda o básico de programação com a linguagem C adawd awdawdawd awdawdawda dawdawdawdawdaw dawdaw",
//   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
//   createdAt: "",
//   updatedAt: "",
//   __v: 0
// }

function Home(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  if(matches){
    console.log(matches)
  }

  const [data, setData] = useState<ModuleItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/module/all");
        const jsonData = await response.json();

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
        <MainBanner matches={matches}></MainBanner>

        <Container sx={{marginTop: "2em"}}>
          {matches ? (
            <Box style={{display: "flex", alignItems: "center"}}>
            <Typography 
              component="h2"
              style={{
                fontSize: 28,
                textAlign: 'left', 
                fontWeight: "600", 
                color: "white"
                }}
            >
              Módulos
            </Typography>
            <EastIcon style={{marginLeft: 10, color: "white", opacity: .3}}/>
          </Box>
          ) : (
            <Box style={{display: "flex", alignItems: "center"}}>
              <Typography 
                component="h2"
                style={{
                  fontSize: 26,
                  textAlign: 'left', 
                  fontWeight: "600", 
                  color: "white"
                  }}
              >
                Módulos
              </Typography>
              <EastIcon style={{marginLeft: 10, color: "white", opacity: .3}}/>
            </Box>
            
            
          )}
          
          <div style={{marginTop: 20}}>
            
            {data.map((item, index) => (
              <Link className='link' key={index} to={`module/${item._id}`} >
                
                {<Module module={item} matches={matches}></Module>}

              </Link>
            ))}

          </div>
          
        </Container>

      </ThemeProvider>
      </div>  
    </Body>
  );
}


export default Home;