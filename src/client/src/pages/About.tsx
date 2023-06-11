import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});
  

function About(){

    return(
        <div>
            <ThemeProvider theme={darkTheme}>
                <NavBar />
                <Container style={{marginTop: "1em"}}>
                    "Bem-vindo(a) à Crafting Code, uma plataforma de ensino gratuita com uma ampla variedade de linguagens e tecnologias. Aqui você encontrará aulas gravadas e diversos materiais de apoio para aprendizado. A Crafting Code foi desenvolvida por mim, Vinícius Gonzaga, com o objetivo de aprender ensinando outras pessoas. Acredito que só realmente dominamos um assunto quando somos capazes de capacitá-los a outras pessoas, ou até mesmo a superarem nossas próprias habilidades.
                    <br/><br/>
                    Nesta plataforma, você terá acesso a uma variedade de conteúdos que eu mesmo criei durante meus estudos. É importante ressaltar que, como desenvolvi toda a plataforma sozinho, pode haver alguns erros aqui e ali, principalmente nas aulas. Portanto, se você encontrar algo assim, sinta-se à vontade para me avisar através deste email: exemplo@gmail.com.
                    <br/><br/>
                    Por fim, aproveite ao máximo sua jornada de estudos aqui na Crafting Code! Tenho certeza de que encontrará recursos valiosos para aprimorar seus conhecimentos. Bons estudos!"
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default About;

