import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme, CssBaseLine } from '@material-ui/core';
import { purple, amber, grey } from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";
import { blueGrey } from "@material-ui/core/colors";


//Custom theme for Material UI
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1EDBF5',
      dark: '#0C1D33'
    },
    background: {
      default: "#F3F3F3",
      paper: "#F3F3F3"
    }
  },
  shape: {
    borderRadius:10
  },
  textField: {
    
  }
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


