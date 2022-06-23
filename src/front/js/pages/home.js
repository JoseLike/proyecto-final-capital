import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { LandingCard } from "../component/landingcard.jsx";
import logosimple from "../../img/logosimple.png";

import "../../styles/landing.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid p-4 m-1">
      <div className="row d-flex">
        <div className="col-md-5 left-col-landing shadow">
          <div className="log-options">
            <img
              src={logosimple}
              className="logoprincipal logo-login-page mb-4"
              alt=""
            />
            <div className="block text-center mt-4">
              <div className="me-2 reg-div align-items-center">
                <div className="mb-2 reg-div">
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="btn btn-light btns-landing"
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <Link to={"/register"}>
                  <button type="button " className="btn btn-light btns-landing">
                    Registrarse
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 right-col-landing  ">
          <div className="d-flex p-3 landing-text-right text-center align-items-center rounded">
            Encuentra los mejores proyectos en los que invertir tu capital o si
            eres un emprendedor...date a conocer y encuentra el capital para tu
            idea
          </div>
          <div className="d-flex">
            <LandingCard
              category="Maquinaria"
              name="Sistema dinámico de extrusion 3D"
              eta="22/12/2029"
              capital="3000€"
            />
            <LandingCard
              category="Salud"
              name="Investigacion con celulas madre"
              eta="05/08/2023"
              capital="250000€"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
