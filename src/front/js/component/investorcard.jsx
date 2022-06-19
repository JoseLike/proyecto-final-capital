import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "/workspace/proyecto-final-capital/src/front/styles/personalview.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const InvestorCard = (props) => {
  const { store, actions } = useContext(Context);
  const [icono, seticono] = useState("fa-regular fa-star");
  let navigate = useHistory();

  return (

    <Link to={"/project/" + (props.id)}>

      <div className="card investor-card m-2">
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
          <a className="btn-outline-warning float-end " onClick={props.fav}>
            <i class="fa-regular fa-star"></i>
          </a>
        </div>
      </div>
    </Link>
  );
};

InvestorCard.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  capital: PropTypes.number,
  eta: PropTypes.string,
  enlace: PropTypes.func,
  fav: PropTypes.string,
};
