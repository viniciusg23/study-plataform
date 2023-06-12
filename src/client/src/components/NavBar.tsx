import * as React from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu,
  MenuItem, 
  Button, 
  Container 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoModal from './InfoModal';
import { Link } from 'react-router-dom';



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
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              <Typography className="textLogo" variant="h6" noWrap component="div">
                <span>&lt;</span>
                <p>C</p>
                <p>C</p>
                <span>/&gt;</span>
              </Typography>
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
              {pages.map((page) => (
                <Link to={page.link} className="link" style={{color: "white"}}>
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
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Typography className="textLogo" variant="h6" noWrap component="div">
                <span>&lt;</span>
                <p>Crafting</p>
                <p>Code</p>
                <span>/&gt;</span>
              </Typography>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: "center" } }}>
            {pages.map((page) => (
              <Link to={page.link} className="link" style={{color: "white"}}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
              
            ))}
            <InfoModal />
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}



export default NavBar;