import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../styles/home.css";
import Navbar from "/workspace/proyecto-final-capital/src/front/js/component/navbar.js";
import Prueba1 from "./prueba1";
import Prueba2 from "./prueba2";

export const Home = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={Home} />
          <Route path="/prueba1" element={Prueba1} />
          <Route path="/prueba2" element={Prueba2} />
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
