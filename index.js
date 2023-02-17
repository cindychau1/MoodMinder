import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';

const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

// create custom theme from mood icons
const theme = createTheme({
  palette: {
    primary: {
      main: '#878787',
    },
    DarkGreen: {
      main: '#32a02d',
    },
    LightGreen: {
      main: '#b2df8a',
    },
    Gray: {
      main: '#a2a2a2',
    },
    LightBlue: {
      main: '#a6cee3',
    },
    DarkBlue: {
      main: '#2078b4',
    },
    White: {
      main: '#ffffff',
    },
    Black: {
      main: '#1b1813',
    },
  },
});

// initial render
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
