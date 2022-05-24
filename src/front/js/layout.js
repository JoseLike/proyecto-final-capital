import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { Sidebar } from "./component/Sidebar";
import Prueba1 from "./pages/prueba1";
import Prueba2 from "./pages/prueba2";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex">
      <BrowserRouter basename={basename}>
        <Sidebar />
        <div className="pageContent">
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/prueba1">
                <Prueba1 />
              </Route>
              <Route exact path="/prueba2">
                <Prueba2 />
              </Route>
              <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
            <Footer />
          </ScrollToTop>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
