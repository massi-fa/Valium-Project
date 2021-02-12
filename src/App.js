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
import Home from "./components/Home";
import Header from "./components/Header";
import Armadio from "./components/Armadio";
import Camera from "./components/Camera";
const Container = styled.div`

`;

const App = () => ( 
  <Router>
    <Switch>
      
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/armadio">
        <Armadio />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      
      <Route path="/camera">
        <Camera />
      </Route>

    </Switch>
  </Router>
);

export default App;
