import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "../src/components/App/App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["Helvetica Neue", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "rgb(12, 11, 12, 0.8)",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
