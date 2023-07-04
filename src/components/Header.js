import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles()(() => ({
    title: {
      flex:1,
      color:"gold",
      fontFamily:"Monteserrat",
      fontWeight:"bold",
      cursor:"pointer",
    },
  }));

const darkTheme = createTheme({
    palette: {
      primary: {
        main:'#fff'      
    },
    mode: "dark"
    },

  });
const Header = () => {

  const {classes} = useStyles();
  const navigate = useNavigate();
  const {currency, setCurrency } = CryptoState();
  return (
    <ThemeProvider theme={darkTheme}>
   <AppBar color='transparent' position='static'>
    <Container>
        <Toolbar>
            <Typography onClick={()=>{navigate('/');}} className={classes.title} variant='h5'>
                Crypto Hunter
            </Typography>
            <Select variant='outlined' style={{width:100,height:40,marginRight:15}} value={currency} onChange={(e)=> setCurrency(e.target.value)}>
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'INR'}>INR</MenuItem>
        </Select>
        </Toolbar>
    </Container>
   </AppBar>
   </ThemeProvider>
  )
}

export default Header