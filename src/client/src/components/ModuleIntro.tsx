import { Box, Divider, Typography, styled } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';


interface LessonModule{
    title: string;
    subtitle: string;
    description: string;
    subjects: string[];
    logo: string;
}


function ModuleIntro(props: LessonModule){
    
    const matches = useMediaQuery<any>((theme) => theme.breakpoints.up('md'));
 

    if(matches){
        return(
            <Box>
                <Box sx={{display: "flex", gap: "2em", mb: "2em"}}>
                    <Box sx={{ 
                            maxWidth: "12em",
                            backgroundColor: "#ffffff30",
                            borderRadius: 2
                        }}>
                        {<img src={props.logo}  alt={props.title} width={"100%"}/>}
                    </Box>
                    <Box>
                        <Typography 
                            component="h2" 
                            fontSize={"2em"}
                            fontWeight={700} 
                            mb={2}
                        >{props.title}</Typography>
                        <Typography component="h4" fontSize={"1.2em"} fontStyle={"italic"}>{props.subtitle}</Typography>
                        <Box  sx={{ display: 'flex' }}>
                            <Typography> Conteúdos:
                                {props.subjects.map((text) => {
                                    const cores = gerarCores();
                                    return(
                                        <Typography display={"inline"} ml={1} p={.23} borderRadius={1} bgcolor={cores.corDeFundo} color={cores.corDeContraste}>{text}</Typography>
                                    ); 
                                })}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{mb: 3}}></Divider>
                
                <Typography textAlign={"center"} fontSize={"1.5em"} fontWeight={600} mb={1}>Descrição</Typography>
                <Typography>{props.description}</Typography>
            </Box>
            
        );
    }
    else{
        
        return(
            <Box>
                <Box sx={{display: "flex", alignItems: "center", gap: "1em"}}>
                    <Box sx={{ 
                            display: "flex",
                            alignItems: "center",
                            p: .5,
                            maxWidth: "4em",
                            backgroundColor: "#ffffff30",
                            borderRadius: 2
                        }}>
                        {<img src={props.logo}  alt={props.title} width={"100%"}/>}
                    </Box>
                    <Typography 
                        component="h2" 
                        fontSize={"1.5em"}
                        fontWeight={700} 
                    >
                        {props.title}
                    </Typography>
                </Box>

                    
                <Typography component="h4" fontSize={"1.1em"} my={1} fontStyle={"italic"}>{props.subtitle}</Typography>

                <Typography mb={2}> Conteúdos:
                    {props.subjects.map((text) => {
                        const cores = gerarCores();
                        return(
                            <Typography display={"inline"} ml={1} p={.23} borderRadius={1} bgcolor={cores.corDeFundo} color={cores.corDeContraste}>{text}</Typography>
                        ); 
                    })}
                </Typography>
                
                <Typography textAlign={"center"} fontSize={"1.2em"} fontWeight={600}>Descrição</Typography>
                <Typography>{props.description}</Typography>
            </Box>
        );
    }


    
}



function gerarCores() {
    var letrasHex = '0123456789ABCDEF';
    var corDeFundo = '#';
  
    // Gerar cor de fundo
    for (var i = 0; i < 6; i++) {
      corDeFundo += letrasHex[Math.floor(Math.random() * 16)];
    }
  
    // Converter cor de fundo para RGB
    var r = parseInt(corDeFundo.substring(1, 3), 16);
    var g = parseInt(corDeFundo.substring(3, 5), 16);
    var b = parseInt(corDeFundo.substring(5, 7), 16);
  
    // Calcular o valor médio para determinar o contraste
    var valorMedio = (r + g + b) / 3;
  
    // Determinar cor de contraste
    var corDeContraste = valorMedio > 127 ? '#000000' : '#FFFFFF';
  
    return {
      corDeFundo: corDeFundo,
      corDeContraste: corDeContraste
    };
  }


export default ModuleIntro;