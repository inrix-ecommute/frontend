import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/montserrat";
const theme = extendTheme({
  colors: {
    brand: {
      light: "#D4F2D3",
      main: "#56BB55",
      dark: "#32703C",
    },
  },
  fonts: {
    heading: "'Montserrat Variable', sans-serif",
    body: "'Montserrat Variable', sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
