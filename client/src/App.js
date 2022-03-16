import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLInk = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLInk.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="site_container">
      <ApolloProvider client={client}>
        <Header />
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
