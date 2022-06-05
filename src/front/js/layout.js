import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ProjectView } from "./pages/projectview";
import { PersonalView } from "./pages/personalview";
import { MyAccount } from "./pages/myaccount";
import { InversorPay } from "/workspace/proyecto-final-capital/src/front/js/pages/inversorpay.js";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { Sidebar } from "./component/Sidebar";
import { CrearProyecto } from "/workspace/proyecto-final-capital/src/front/js/pages/CrearProyecto.js";
import { EditarProyecto } from "./pages/editarproyecto";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login" className="d-flex">
            <div className="d-flex">
              <Login />
            </div>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/project/:theid">
            <div className="d-flex">
              <Sidebar />
              <ProjectView />
            </div>
          </Route>
          <Route exact path="/personal">
            <div className="d-flex">
              <Sidebar />
              <PersonalView />
            </div>
          </Route>
          <Route exact path="/account">
            <div className="d-flex">
              <MyAccount />
            </div>
          </Route>
          <Route exact path="/inversorpay">
            <InversorPay />
          </Route>
          <Route exact path="/crearproyecto">
            <CrearProyecto />
          </Route>
          <Route exact path="/editarproyecto/:theid">
            <EditarProyecto />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
