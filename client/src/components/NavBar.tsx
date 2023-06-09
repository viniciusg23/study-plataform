import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../context/ColorModeContext';
import Logo from './Logo';
import { Link } from 'react-router-dom';

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

    const {mode, toggleColorMode } = React.useContext(ColorModeContext);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                    
                <Logo />

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
                            <Link to={page.link} className="link">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            </Link>
                        ))}

                    </Menu>
                </Box>
                
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        color: 'inherit',
                    }}
                >
                    <Link to={"/"} className="link">
                        <Typography className="textLogo" variant="h6" noWrap color="primary.contrastText">
                            <span>&lt;</span>
                            <p>Crafting</p>
                            <p>Code</p>
                            <span>/&gt;</span>
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

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
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Color Mode">
                        <IconButton onClick={toggleColorMode} sx={{ p: 0 }}>
                            {mode === "dark" ? <LightModeIcon /> : <ModeNightIcon />}
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
