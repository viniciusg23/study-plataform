import '../App.css';
import { useEffect, useState } from "react";
import { 
  Container, 
  Typography, 
  Box, 
  useMediaQuery, 
  useTheme, 
  Paper
} from '@mui/material';
import MainBanner from '../components/MainBanner';
import Module from '../components/Module';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import NavBar from '../components/NavBar';



interface ModuleItem {
  _id: string
  title: string
  subtitle: string
  logo: string
  createdAt: string
  updatedAt: string
  __v: number
}



function Home(){
  const pageWidth = useTheme();
  const matches = useMediaQuery(pageWidth.breakpoints.up('md'));

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
    <Paper 
      sx={{
        height: "100vh"
      }}
    >
      <NavBar />
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
            }}
          >
            Módulos
          </Typography>
          <EastIcon style={{marginLeft: 10, opacity: 1}}/>
        </Box>
        ) : (
          <Box style={{display: "flex", alignItems: "center"}}>
            <Typography 
              component="h2"
              style={{
                fontSize: 26,
                textAlign: 'left', 
                fontWeight: "600", 
              }}
            >
              Módulos
            </Typography>
            <EastIcon style={{marginLeft: 10, opacity: 1}}/>
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

    </Paper>  
  );
}


export default Home;