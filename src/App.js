import React from "react";
import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

const Container = styled.div`

`;

const App = () => ( 
  <Router>
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
);

export default App;
