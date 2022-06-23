import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/personalview.css";
import { Link } from "react-router-dom";
import { InvestorCard } from "./investorcard.jsx";
import PropTypes from "prop-types";

export const InvestorLanding = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-5">
      <div className="personal-title-row row">
        <div className="personal-title text-center">
          Bienvenido a tu vista personal como INVERSOR
        </div>
      </div>
      <div className="personal-title-row row">
        <div className="personal-title text-center mt-4">Tus Favoritos</div>
        <div className="d-flex">
          {store.favourites.map((projects) => {
            return (
              <InvestorCard
                key={projects.id}
                id={projects.id}
                category={projects.category_id}
                name={projects.title}
                eta={projects.deadline}
                capital={projects.desired_capital}
                fav={() => {
                  actions.addToFavs(projects);
                }}
              />
            );
          })}
        </div>
      </div>
      <Link to="/buscarproyecto">
        <div href="#" className="btn-flotante text-center align-items-center">
          Buscar Proyectos
          <i className="fa-solid fa-magnifying-glass-plus pt-1 fa-2xl"></i>
        </div>
        <div className="personal-title-row row">
          <div className="personal-title text-center mt-4">Tus Favoritos</div>
          <div className="d-flex">
            {store.favourites.map((projects) => {
              return (
                <InvestorCard
                  key={projects.id}
                  id={projects.id}
                  imagen={projects.project_picture}
                  category={projects.category_id}
                  name={projects.title}
                  eta={projects.deadline}
                  capital={projects.desired_capital}
                  fav={() => {
                    actions.addToFavs(projects);
                  }}
                />
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};
