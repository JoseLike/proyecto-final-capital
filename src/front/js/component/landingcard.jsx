import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/personalview.css";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const LandingCard = (props) => {
  const { store, actions } = useContext(Context);
  let navigate = useHistory();

  return (
    <div className="card landing-card m-2">
      <img
        className="card-img-top"
        src="https://t2.ea.ltmcdn.com/es/posts/8/2/2/tipos_de_pinguinos_21228_600_square.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{props.name}</h5>
        <p className="card-text text-start">Fecha limite {props.eta}</p>
        <p className="card-text text-start">
          Capital Requerido: {props.capital}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">Categoria: {props.category_id}</small>

        <i className="fa-regular fa-star  float-end"></i>
      </div>
    </div>
  );
};

LandingCard.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  capital: PropTypes.string,
  eta: PropTypes.string,
  enlace: PropTypes.func,
};
