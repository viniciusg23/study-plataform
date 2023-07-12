import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"


function Logo(){

    return(
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
                <Typography className="textLogo" variant="h6" noWrap color="primary.contrastText">
                    <span>&lt;</span>
                    <p>Crafting</p>
                    <p>Code</p>
                    <span>/&gt;</span>
                </Typography>
            </Typography>
        </Link>
    )
}

export default Logo;