import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

export const StadisticsView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getUserStadistics();
    store.current_user;
  }, []);

  return (
    <div className="container mt-5  rounded shadow p-3">
      <div className="row">
        <div className="col-6 text-center mx-auto">Mis Estadisticas</div>
      </div>
      <div className="row mt-4 ">
        <div className="col-6 mx-auto">
          <ul className="list-group">
            <li className="list-group-item">
              Estas en Investup desde: {store.current_user.longevity}
            </li>
            <li className="list-group-item">
              Proyectos publicados: {store.user_stadistics.total_projects}
            </li>
            <li className="list-group-item">Total capital obtenido: </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
