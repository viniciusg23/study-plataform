import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
  Dialog,
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  useTheme, 
  IconButton, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Link 
} from '@mui/material';
import React from 'react';
import '../App.css';


function InfoModal() {
    const [opened, setOpened] = React.useState(false);
    const [initialized, setInitialized] = React.useState(false);

    React.useEffect(() =>{
        const lcItem = JSON.parse(localStorage.getItem("opened")!) || false;
        setOpened(lcItem);
        setInitialized(true);
    }, []);
    
    React.useEffect(() => {
        if (initialized) {
            setOpen(!opened);
        }
    }, [initialized]);

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

   
    const handleModalPermission = (event: any) =>{
        const isChecked = event.target.checked;
        if (isChecked){
            setOpened(true);
            localStorage.setItem("opened", JSON.stringify(true));
        }
        else{
            setOpened(false);
            localStorage.setItem("opened", JSON.stringify(false));
        }
    }
  

    return (
      <div>
        <IconButton onClick={handleClickOpen} sx={{opacity: "30%"}}>
          <HelpOutlineIcon />
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Boas Vindas! 👋"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              "Bem-vindo(a) à Crafting Code, uma plataforma de ensino gratuita com uma ampla variedade de linguagens e tecnologias. Aqui você encontrará aulas gravadas e diversos materiais de apoio para aprendizado. A Crafting Code foi desenvolvida por mim, Vinícius Gonzaga, com o objetivo de aprender ensinando outras pessoas. Acredito que só realmente dominamos um assunto quando somos capazes de capacitá-los a outras pessoas, ou até mesmo a superarem nossas próprias habilidades.
              <br/><br/>
              Nesta plataforma, você terá acesso a uma variedade de conteúdos que eu mesmo criei durante meus estudos. É importante ressaltar que, como desenvolvi toda a plataforma sozinho, pode haver alguns erros aqui e ali, principalmente nas aulas. Portanto, se você encontrar algo assim, sinta-se à vontade para me avisar através deste email:
              <br/><br/>
              <Link style={{color: "#03FA6E"}} href="mailto:craftingcode.c@gmail.com" underline="hover">
                <b>craftingcode.c@gmail.com</b>
              </Link>
              <br/><br/>
              Por fim, aproveite ao máximo sua jornada de estudos aqui na Crafting Code! Tenho certeza de que encontrará recursos valiosos para aprimorar seus conhecimentos. Bons estudos!"
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <FormControlLabel itemID='modalPermission' control={<Checkbox onChange={handleModalPermission}/>} label="Não mostrar novamente" />
            <Button onClick={handleClose} autoFocus>
                Começar Já
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}


export default InfoModal;