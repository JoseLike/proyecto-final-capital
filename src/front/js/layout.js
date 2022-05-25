import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ProjectView } from "./pages/projectview";
import { PersonalView } from "./pages/personalview";
import { MyAccount } from "./pages/myaccount";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { Sidebar } from "./component/Sidebar";
import Prueba1 from "./pages/prueba1";
import Prueba2 from "./pages/prueba2";
import { CrearProyecto } from "/workspace/proyecto-final-capital/src/front/js/pages/CrearProyecto.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/crearproyecto">
              <CrearProyecto />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
