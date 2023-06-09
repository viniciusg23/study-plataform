import { Container, Link, Paper } from "@mui/material";
import NavBar from "../components/NavBar";

function About(){

    return(
        <Paper sx={{height: "100vh"}}>
            <NavBar />
            <Container style={{paddingTop: "2em"}}>
                "Bem-vindo(a) à Crafting Code, uma plataforma de ensino gratuita com uma ampla variedade de linguagens e tecnologias. Aqui você encontrará aulas gravadas e diversos materiais de apoio para aprendizado. A Crafting Code foi desenvolvida por mim, Vinícius Gonzaga, com o objetivo de aprender ensinando outras pessoas. Acredito que só realmente dominamos um assunto quando somos capazes de capacitá-los a outras pessoas, ou até mesmo a superarem nossas próprias habilidades.
                <br/><br/>
                Nesta plataforma, você terá acesso a uma variedade de conteúdos que eu mesmo criei durante meus estudos. É importante ressaltar que, como desenvolvi toda a plataforma sozinho, pode haver alguns erros aqui e ali, principalmente nas aulas. Portanto, se você encontrar algo assim, sinta-se à vontade para me avisar através deste email:
                <br/><br/>
                <Link style={{color: "#03FA6E"}} href="mailto:craftingcode.c@gmail.com" underline="hover">
                    <b>craftingcode.c@gmail.com</b>
                </Link>
                <br/><br/>
                Por fim, aproveite ao máximo sua jornada de estudos aqui na Crafting Code! Tenho certeza de que encontrará recursos valiosos para aprimorar seus conhecimentos. Bons estudos!"
            </Container>
        </Paper>
    );
}

export default About;

