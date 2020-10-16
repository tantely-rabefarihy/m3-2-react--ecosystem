import React from "react";
import { items } from "../data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Home from "./Home";
import ItemDetails from "./ItemDetails";
import Header from "./Header";

const App = (props) => {
  console.log(props);
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/items/:itemId">
              <ItemDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
