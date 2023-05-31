import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ModuleIntro from '../components/ModuleIntro';
import { useEffect, useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const drawerWidth = 300;

interface Props {
  window?: () => Window;
}

function ModuleLesson(props: Props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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


  const lessons = ["Aula 1 - Intro", "Aula 2 - Variavel", "Aula 3 - Manipulação de Dados", "Aula 4 - Funções"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {lessons.map((text, index) => (
          <ListItem key={text} disablePadding style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText  primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <AddCircleIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {"<Crafting Code/>"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, px: 5, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <ModuleIntro title={'Linguagem C'} subtitle={'Introdução a programação utilizando a linguagem C'} description={
          `A linguagem de programação C é uma das linguagens de programação mais populares e amplamente utilizadas na indústria de desenvolvimento de software. Criada por Dennis Ritchie na década de 1970, a linguagem C foi desenvolvida como uma evolução da linguagem B, buscando maior portabilidade e eficiência.

          A C é conhecida por sua simplicidade e poder de expressão, permitindo aos programadores escreverem códigos de forma concisa e eficiente. Ela foi projetada para fornecer um nível mais baixo de abstração, o que significa que os programadores têm controle direto sobre a memória e os recursos do sistema, tornando-a uma linguagem de programação de "alto nível" próximo da linguagem de máquina.

          Uma das principais características da linguagem C é sua portabilidade. Os programas escritos em C podem ser compilados e executados em diferentes sistemas operacionais e arquiteturas de computador, desde que um compilador C esteja disponível para o ambiente de destino.

          A C é uma linguagem procedural, o que significa que os programas são organizados em funções que realizam tarefas específicas. Ela oferece suporte a tipos de dados básicos, como inteiros, caracteres e ponto flutuante, além de estruturas de controle, como loops e condicionais.

          Além disso, a linguagem C possui recursos poderosos, como ponteiros, que permitem o gerenciamento manual de memória e a manipulação direta de endereços de memória. Isso fornece flexibilidade e eficiência, mas também exige maior cuidado e atenção dos programadores para evitar erros.

          A C também possui uma ampla biblioteca padrão, que fornece funções para realizar tarefas comuns, como entrada e saída de dados, manipulação de strings, alocação dinâmica de memória, entre outras.

          Devido à sua eficiência e flexibilidade, a linguagem C é amplamente usada no desenvolvimento de sistemas operacionais, compiladores, controladores de dispositivo, jogos e aplicativos de alto desempenho. Também é comumente ensinada em cursos introdutórios de ciência da computação devido à sua importância histórica e ao seu papel fundamental no desenvolvimento de outras linguagens de programação.`
        } subjects={["Programação", "Linguagem C"]} logo={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'} />
      </Box>
    </Box>
    </ThemeProvider>
  );
}


export default ModuleLesson;
