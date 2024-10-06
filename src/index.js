import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./mui/theme";
import App from "./App";

import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cm1q5e8iw02bk08wbhx6j0bx7/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
