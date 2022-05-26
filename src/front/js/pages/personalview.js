import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import logosimple from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
import { Projectcard } from "/workspace/proyecto-final-capital/src/front/js/component/projectscard.jsx";
import "../../styles/personalview.css";

export const PersonalView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  //useEffect(() => {
  //actions.getUserProjects();
  //}, []);

  return (
    //{store.user.user_type != inversor ?}
    <div className="container mt-5">
      <div className="personal-title-row row">
        <div className="personal-title text-center">
          Bienvenido a tu vista personal
        </div>
      </div>
      <div className="personal-title-row row">
        <div className="personal-title text-center mt-4">Tus proyectos</div>
        <div className="personal-title text-center">
          <Projectcard
          //key={project.id}
          //id={project.id}
          // category={project.category}
          //name={project.category}
          //eta={project.date}
          //capital={project.capital}
          //enlace={project.id}
          />
        </div>
      </div>
      <Link to="/newproject">
        <div href="#" className="btn-flotante text-center align-items-center">
          Nuevo Proyecto
          <i className="fa-duotone fa-plus fa-2xl"></i>
        </div>
      </Link>
    </div>
    //:
  );
};
