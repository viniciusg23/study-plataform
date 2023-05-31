import './App.css';
import { createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import ModuleLesson from './pages/ModuleLesson';

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


 
  
  return(

    <Home />


    // <ModuleLesson />
  );
  


 
}

export default App;
