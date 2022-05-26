import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import logosimple from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
import "../../styles/personalview.css";

export const PersonalView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  //useEffect(() => {
  //actions.getSingleProject(theid);
  //}, []);

  return (
    <div className="container mt-5">
      <div className="personal-title-row row">
        <div className="personal-title text-center">Hello</div>
      </div>
      <div className="personal-title-row row">
        <div className="personal-title text-center">Hello</div>
      </div>
      <link to="/newproject">
        <a href="#" className="btn-flotante text-center align-items-center">
          Nuevo Proyecto
          <i class="fa-duotone fa-plus fa-2xl"></i>
        </a>
      </link>
    </div>
  );
};
