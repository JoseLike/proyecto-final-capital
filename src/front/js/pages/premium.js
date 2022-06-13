import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/premium.css";
import { Sidebar } from "../component/Sidebar";

export const Premium = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex premium-page pb-4">
      <Link to={"/personal"}>
        <i className="fa-solid btn-flotante-atras fa-arrow-left arrow-left-reg1 icono-back col-1 ms-4 fixed"></i>
      </Link>
      <div className="container mt-4 rounded shadow p-3 ">
        <div className="row d-flex flex-md-wrap ">
          <div className="divizq col-md-5 border-none rounded m-2 pb-4 shadow">
            <h1 className="text-center m-2 border rounded p-2 free-title">
              Free User
            </h1>
            <h4 className="text-center m-4">Emprendedor</h4>
            <div className="d-flex lst">
              <div className="li-izq">Máximo proyectos publicados</div>
              <div className="text-end li-dcha pe-5">5</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">
                Maximo de visitas diarias a tus proyectos
              </div>
              <div className="text-end li-dcha pe-5">50</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Capital Maximo del proyecto</div>
              <div className="text-end li-dcha pe-5">3000€</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Destacar tus proyectos</div>
              <div className="text-end li-dcha pe-5">NO</div>
            </div>

            <h4 className="mt-4 text-center">Inversor</h4>
            <div className="d-flex lst">
              <div className="li-izq">
                Visualizar proyectos recien publicados
              </div>
              <div className="text-end li-dcha pe-5">NO</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Maximo de proyectos vistos</div>
              <div className="text-end li-dcha pe-5">10</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Ver proyectos destacados</div>
              <div className="text-end li-dcha pe-5">NO</div>
            </div>
            <div
              className="col-5 mx-auto rounded btn-free mt-5 btn-light shadow text-center p-2"
              aria-disabled="false"
            >
              0€/Mes
            </div>
          </div>
          <div className="divdcha col-md-6 border-none rounded m-2 pb-4 shadow">
            <h1 className="text-center premium-title border rounded p-2 m-2">
              Premium User
            </h1>
            <h4 className="text-center m-4">Emprendedor</h4>
            <div className="d-flex lst">
              <div className="li-izq">Máximo proyectos publicados</div>
              <div className="text-end li-dcha pe-5">Ilimitados</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">
                Maximo de visitas diarias a tus proyectos
              </div>
              <div className="text-end li-dcha pe-5">Sin Limites</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Capital Maximo del proyecto</div>
              <div className="text-end li-dcha pe-5">Sin Limites</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Destacar tus proyectos</div>
              <div className="text-end li-dcha pe-5">SI</div>
            </div>

            <h4 className="mt-5 text-center">Inversor</h4>
            <div className="d-flex lst">
              <div className="li-izq">
                Visualizar proyectos recien publicados
              </div>
              <div className="text-end li-dcha pe-5">SI</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Maximo de proyectos vistos</div>
              <div className="text-end li-dcha pe-5">Ilimitados</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Ver proyectos destacados</div>
              <div className="text-end li-dcha pe-5">SI</div>
            </div>
            <div className="d-flex justify-content-around">
              <div
                className="  btn-premium rounded mt-5 btn-success shadow p-3"
                aria-disabled="false"
              >
                20€/Mes
              </div>
              <a
                type="button"
                className=" btn btn-pay mt-5 btn-success shadow p-3"
                aria-disabled="false"
              >
                Hacerme Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
