import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

export const StadisticsView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  //useEffect(() => {
  //actions.getUserProjects();
  //}, []);
  return (
    <div>
      <div className="">
        <Link to="/personal">
          <i className="fa-solid btn-flotante-atras fa-arrow-left arrow-left-reg1 icono-back col-1 ms-4 fixed"></i>
        </Link>
      </div>
      <div className="container mt-5  rounded shadow p-3">
        <div className="row">
          <div className="col-6 text-center mx-auto">Mis Estadisticas</div>
        </div>
        <div className="row mt-4 ">
          <div className="col-6 mx-auto">
            <ul class="list-group">
              <li class="list-group-item">Proyectos publicados: </li>
              <li class="list-group-item">Proyectos con exito: </li>
              <li class="list-group-item">Total capital obtenido: </li>
              <li class="list-group-item">Vistas totales: </li>
              <li class="list-group-item">Ranking de Emprendedores: </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
