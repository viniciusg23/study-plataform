import { Theme, ThemeProvider, createTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";



interface IColorModeContext {
    toggleColorMode: () => void;
    mode: "dark" | "light";
}

export const ColorModeContext = createContext<IColorModeContext>({
    toggleColorMode: () => {},
    mode: "light"
});

export function ColorModeContextProvider({children} : any){
    const [mode, setMode] = useState<"light" | "dark">("light");
    const colorMode = useMemo(() => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            mode,
        }),
        [mode]
    );

    const theme = useMemo(() => {

        if(mode === "light"){
            return createTheme({
                palette: {
                    mode: "light",
                    primary: {
                        main: '#fff',
                        contrastText: '#000'
                    },
                    secondary: {
                        main: '#03fa6e',
                    },
                    text: {
                        primary: "#000"
                    }
                }
            })
        }
        else{
            return createTheme({
                palette: {
                    mode: "dark",
                    primary: {
                        main: '#fff',
                        contrastText: '#fff'
                    },
                    secondary: {
                        main: '#03fa6e',
                    },
                    text: {
                        primary: "#fff"
                    }
                }
            })
        }

        
    },  
    [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )

}

export function useColorMode(){
    useContext(ColorModeContext);
}