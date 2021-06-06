import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme, CssBaseLine } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";


//Custom theme for Material UI
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1EDBF5',
      dark: '#3F9BA5'
    },
    secondary: {
      main: '#0A4950'
    },
    background: {
      default: "#f3f5f9",
      paper: "white"
    }
  },
  shape: {
    borderRadius:12
  },
  textField: {
    borderRadius:12,
  },
  typography: {
    fontFamily: [
      'Fira Sans',
      'Roboto',
      'open sans',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: [
        'Quando', 
        'serif'
      ].join(','),
     }
  },
});

// Function to change webpage background color
function changeBodyBg(color){
    document.body.style.background = color;
}

//test to see if user logged in - temp hardcoded
const loggedIn = true; 

//if loggedout out - change the color
if (loggedIn === false) {
  changeBodyBg('#0c1d33');
}

console.log(theme);

ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);


