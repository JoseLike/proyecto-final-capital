import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/premium.css";

export const Premium = () => {
  const { store, actions } = useContext(Context);

  //useEffect(() => {
  //actions.getSingleProject(theid);
  //}, []);

  return (
    <>
      <Link to={"/personal"}>
        <i className="fa-solid btn-flotante-atras fa-arrow-left arrow-left-reg1 icono-back col-1 ms-4 fixed"></i>
      </Link>
      <div className="container mt-4 rounded shadow p-3 ">
        <div className="row d-flex ">
          <div className="divizq col-5 border m-2">
            <h1 className="text-center m-2">Free User</h1>
            <h4 className="text-center m-2">Emprendedor</h4>
            <ul class="list-group list-group-flush mb-3 ">
              <li class="list-group-item">Máximo proyectos publicados</li>
              <li class="list-group-item">
                Maximo de visitas diarias a tus proyectos
              </li>
              <li class="list-group-item">Capital Maximo del proyecto</li>
              <li class="list-group-item">Destacar tus proyectos</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
            <h4 className="mt-3 text-center">Inversor</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Visualizar proyectos con 5 dias de antiguedad
              </li>
              <li class="list-group-item">Maximo de proyectos vistos </li>
              <li class="list-group-item">Maximo de proyectos Contactados</li>
              <li class="list-group-item">
                Ver los proyectos mas interesantes
              </li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>
          <div className="divdcha col-6 border m-2">
            <h1 className="text-center m-2">Premium User</h1>
            <h4 className="text-center m-2">Emprendedor</h4>
            <ul class="list-group list-group-flush mb-3 ">
              <li class="list-group-item">Máximo proyectos publicados</li>
              <li class="list-group-item">
                Maximo de visitas diarias a tus proyectos
              </li>
              <li class="list-group-item">Capital Maximo del proyecto</li>
              <li class="list-group-item">Destacar tus proyectos</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
            <h4 className="mt-3 text-center ">Inversor</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Visualizar proyectos con 5 dias de antiguedad
              </li>
              <li class="list-group-item">Maximo de proyectos vistos </li>
              <li class="list-group-item">Maximo de proyectos Contactados</li>
              <li class="list-group-item">
                Ver los proyectos mas interesantes
              </li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>

          <div className="d-flex justify-content-evenly">
            <a
              type="button"
              className="col-2 btn btn-pay mt-5 btn-success shadow"
              aria-disabled="false"
            >
              20€/Mes
            </a>
            <a
              type="button"
              className="col-2 btn btn-pay mt-5 btn-success shadow"
              aria-disabled="false"
            >
              Hacerme Premium
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
