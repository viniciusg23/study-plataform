import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu,
  MenuItem, 
  Button, 
  Container, 
  Theme,
  ThemeProvider,
  createTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import InfoModal from './InfoModal';
import { Link } from 'react-router-dom';
import { themeOptionsLight, themeOptionsDark } from '../styles/theme';

import { ColorModeContext, ColorModeContextProvider } from '../context/ColorModeContext';
import { useContext, useState } from 'react';
import Logo from './Logo';






// const pages = ['Início', 'Sobre', 'Contato'];
const pages = [
  {
    name: "Início",
    link: "/"
  },
  {
    name: "Sobre",
    link: "/about"
  },
]


function NavBar() {
  // const { theme } = props;

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const { toggleColorMode, mode } = useContext(ColorModeContext);

  // const handleClick = () => {
  //   toggleColorMode();
  // };

  // const { mode, theme } = useContext(ColorModeContext);

  return (
      <ColorModeContextProvider>
        <AppBar position="static" color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters >
              <Link to={"/"} className="link">
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  <Logo />
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {/* Mobile links */}
                  {pages.map((page) => (
                    <Link to={page.link} className="link">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                <Logo />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: "center" } }}>
                {pages.map((page) => (
                  <Link to={page.link} className="link">
                    <Button
                      color='inherit'
                      variant='text'
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, display: 'block' }}
                    >
                      <Typography color="primary.contrastText">{page.name}</Typography>
                    </Button>
                  </Link>
                  
                ))}
                <InfoModal />
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </ColorModeContextProvider>
        
  );
}



export default NavBar;