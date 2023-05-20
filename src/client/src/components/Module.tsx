import { Box, Grid, Paper, Typography } from "@mui/material";
import "./style.css";

interface ModuleProps{
    module:{
        logo: string
        title: string
        subtitle: string
    }
}


function Module(props: ModuleProps){
    const {module} = props;
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

export default Module;




// export default function Module() {
//   return (
//     <Paper>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm container>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//               <Typography gutterBottom variant="subtitle1" component="div">
//                 Standard license
//               </Typography>
//               <Typography variant="body2" gutterBottom>
//                 Full resolution 1920x1080 • JPEG
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <Typography variant="subtitle1" component="div">
//               $19.00
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }