import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
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
      default: "#E8F0FA",
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

console.log(theme);

ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);


