import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo2 from "/workspace/proyecto-final-capital/src/front/img/logo2.png";
import ideacolor from "/workspace/proyecto-final-capital/src/front/img/ideacolor.png";
import inversorcolor from "/workspace/proyecto-final-capital/src/front/img/inversorcolor.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <nav class="navbar">
        <a class="navbar-brand ms-5" href="#">
          <img src={logo2} width="120" height="80" alt="" />
        </a>
        <ul className="nav col-md-4 d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-twitter-square"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-linkedin"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-facebook-square"></i>
            </a>
          </li>
        </ul>
        <div class="btn-group btn-group-toggle me-5" data-toggle="buttons">
          <button type="button" class="btn btn-outline-primary">
            Login
          </button>
          <button type="button" class="btn btn-outline-primary">
            Register
          </button>
        </div>
      </nav>
      <div className="container">
        <div className="d-flex flex-wrap row border mt-4 p-2">
          <div className="col d-flex justify-content-center">
            <img className="img-ilutrator" src={ideacolor} />
          </div>
          <div className="col d-flex text-center">
            <p>La primera plataforma que une ideas y capital</p>
          </div>
          <div className="col d-flex justify-content-center">
            <img className="img-ilutrator" src={inversorcolor} />
          </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
};
