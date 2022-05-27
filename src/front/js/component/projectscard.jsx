import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "/workspace/proyecto-final-capital/src/front/styles/home.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Projectcard = (props) => {
    const { store, actions } = useContext(Context);

    return (<div className="card m-4 bg-light text-white shadow" onClick={props.enlace} style={{ width: "18rem" }}>
        <h2 className="card-title mb-4">{props.name}</h2>
        <img className="card-img-top mt-2" src={""} alt="projectt image" />
        <div className="card-body">
            <h5 className="card-title mb-4">Capital Requerido: {props.capital}</h5>
            <h5 className="card-title mb-4">Fecha limite {props.eta}</h5>
            <h5 className="card-title mb-4">Fecha limite {props.category}</h5>
        </div>
    </div>)
};

Projectcard.propTypes = {
    category: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    capital: PropTypes.number,
    eta: PropTypes.string,
    enlace: PropTypes.func
};