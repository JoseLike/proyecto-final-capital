import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { InvestorCard } from "/workspace/proyecto-final-capital/src/front/js/component/investorcard.jsx";
import logosimple from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";

import "../../styles/landing.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid p-4">
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
                    <button type="button" class="btn btn-light btns-landing">
                      Login
                    </button>
                  </Link>
                </div>
                <Link to={"/register"}>
                  <button type="button " class="btn btn-light btns-landing">
                    Registrarse
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 right-col-landing ">
          <div className="d-flex">
            <InvestorCard />
            <InvestorCard />
            <InvestorCard />
          </div>
        </div>
      </div>
    </div>
  );
};
