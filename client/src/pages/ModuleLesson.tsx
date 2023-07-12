import AddCircleIcon from '@mui/icons-material/AddCircle';
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
import Skeleton from '@mui/material/Skeleton/Skeleton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { MouseEvent, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import "../App.css";
import Lesson from "../components/Lesson";
import ModuleIntro from '../components/ModuleIntro';

const drawerWidth = 300;
interface Props {
  window?: () => Window;
}

interface ModuleInfo{
    _id: string,
    title: string,
    subtitle: string,
    lessons: [
      {
        _id: string,
        name: string
      }
    ],
    description: string,
    subject: string[],
    logo: string,
    createdAt: string,
    updatedAt: string,
    __v: 0
}

function ModuleLesson(props: Props) {
  const [data, setData] = useState<ModuleInfo>();
  const [content, setContent] = useState(<></>);

  const {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/module/${id}`);
        const jsonData = await response.json();

        if(jsonData.error){
          alert("Nenhum Módulo encontrado");
        }
        else{
          setData(jsonData.module);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  function handleLesson(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    setContent(<Lesson lessonId={event.currentTarget.id} />)
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {!data ? (
          <Box sx={{width: "100%", paddingX: 3}}>
            <Skeleton variant="rounded" width={"100%"} height={60} sx={{marginBottom: 2}} />
            <Skeleton variant="rounded" width={"100%"} height={60} sx={{marginBottom: 2}} />
            <Skeleton variant="rounded" width={"100%"} height={60} sx={{marginBottom: 2}} />
          </Box>
          
        ) : (
          data.lessons.map((lesson, index) => (
            <div id={lesson._id} onClick={(event) => handleLesson(event)}>
              <ListItem key={lesson.name} disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={lesson.name} />
                </ListItemButton>
              </ListItem>
            </div>
          ))
        )}

      </List>
    </div>
  );

  useEffect(() =>{
    if(!data){
      setContent(<Skeleton variant="rounded" width={"100%"} height={"100%"} />)
    }
    else{
      setContent(<ModuleIntro title={data.title} subtitle={data.subtitle} description={data.description} subjects={data.subject} logo={data.logo} />);
    }
  }, [data]);

  return (
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
          <Link to="/" className="link">
            <Typography className="textLogo" variant="h6" noWrap component="div">
              <span>&lt;</span>
              <p>Crafting</p>
              <p>Code</p>
              <span>/&gt;</span>
            </Typography>
          </Link>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
        {content}
        
      </Box>
    </Box>
  );
}


export default ModuleLesson;
