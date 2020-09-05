import React from "react";
import UserPanel from "./components/UserPanel/UserPanel.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminPanel from "./components/AdminPanel/AdminPanel";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://77.87.218.208:4006/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          <Route path="/">
            <UserPanel />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
