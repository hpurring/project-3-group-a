import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Search from './pages/Search';
import Profile from "./pages/EditForm";
import ProfilePage from "./pages/Profile";
// import Qrcode from './components/Qrcode;
// import Contacts from './components/Contacts';
// import Card from './components/Card;
// // import Login from "./components/Login";
// import Signup from "./components/Signup";


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

        {/* <div className="flex-column justify-flex-start min-100-vh"> */}
          <Header />
          <div className="container">

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profilepage">
              <ProfilePage />
            </Route>
            {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
            <Route exact path="/thoughts/:thoughtId">
              {/* <SingleThought /> */}
              </Route>

            <Route exact path="/sign-up">
              {/* <Signup /> */}
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>

            {/* <Route exact path="//:thoughtId">
              <Contacts /> */}
            {/* </Route> */}
          </div>
          {/* <Footer /> */}
        {/* </div> */}

      </Router>
    </ApolloProvider>
  );
}

export default App;
