import React from "react";
import UserPanel from "./components/UserPanel/UserPanel.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
  return (
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
  );
}

export default App;
