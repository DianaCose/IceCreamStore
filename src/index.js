import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from '../src/components/App/App';
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: ["Helvetica Neue", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "rgb(12, 11, 12, 0.8)"
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


