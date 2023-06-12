import { Box, Button, Drawer, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import "./style.css";
import React from "react";

interface ModuleProps{
    module:{
        logo: string
        title: string
        subtitle: string
    },
    matches: boolean
}


function Module(props: ModuleProps){
    const {module} = props;
    const {matches} = props

    if(matches){
        return(
            <Paper elevation={5} className="module" style={{
                transitionProperty: "border, transform",
                transitionDuration: "300ms"
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    padding={2}
                    columnSpacing={3}
                    // style={{backgroundColor: "#323232"}}
                    >
                    <Grid item xs="auto" container>
                        <Box
                        sx={{
                            width: 124,
                            height: 124,
                            backgroundColor: "#ffffff30",
                            borderRadius: 2
                        }}
                        >
                        {<img src={module.logo} />}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs
                        style={{ textAlign: 'left'}}
                    >
                        <Typography component="h3" style={{ fontSize: 28 }}>{module.title}</Typography>
                        <Typography>{module.subtitle} </Typography>
                    </Grid>
                </Grid>
            </Paper>
        );    
    }
    else{
        return(
            <Paper elevation={5} className="module" style={{
                transitionProperty: "border, transform",
                transitionDuration: "300ms"
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    padding={2}
                    columnSpacing={3}
                    >
                    <Grid item xs="auto" container>
                        <Box
                        sx={{
                            width: 72,
                            height: 72,
                        }}
                        >
                        {<img src={module.logo} />}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs
                        style={{ textAlign: 'left'}}
                    >
                        <Typography component="h3" style={{ fontSize: 20 }}>{module.title}</Typography>
                        <Typography style={{opacity: 0.7}}> {module.subtitle} </Typography>
                    </Grid>
                </Grid>
            </Paper>
        );    
    }

    

}

export default Module;
