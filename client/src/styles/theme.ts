import { lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

export const themeOptionsLight: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {

        main: '#ffffff',
       
    },
    secondary: {
        main: '#03fa6e',
    },
   
    // text:{
    //     primary: "#000",
    //     secondary: "#b2b2b2"
    // }
  },
};

export const themeOptionsDark: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
          main: '#ffffff',
        },
        secondary: {
          main: '#03fa6e',
        },
        info: {
            main: "#fff"
        },
        text: {
            primary: "#fff",
            secondary: "#b2b2b2"
        }
    },
}


