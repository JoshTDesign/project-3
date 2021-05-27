import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme, CssBaseLine } from '@material-ui/core';
import { purple, amber, grey } from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";
import { blueGrey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1EDBF5',
    },
    secondary: blueGrey,
    // {
      // main: '#f44336',
    //   main: blueGrey,
    // },
    background: {
      default: '#F3F3F3',
      paper: '#ffffff'
    },
  },
  shape: {
    borderRadius:10
  }
});

console.log(theme);

ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);
