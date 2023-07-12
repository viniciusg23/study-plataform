import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Outlet } from "react-router-dom";
import { ColorModeContextProvider } from './context/ColorModeContext';
import NavBar from './components/NavBar';

function App() { 

  const theme = createTheme({palette: {mode: "dark"}});
  
  return(

    <div>
      <ColorModeContextProvider>
        <Outlet></Outlet>
      </ColorModeContextProvider>
    </div>

  );
  


 
}

export default App;
