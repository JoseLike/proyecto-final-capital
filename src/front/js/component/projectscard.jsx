import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "/workspace/proyecto-final-capital/src/front/styles/personalview.css";
import PropTypes from 'prop-types';

export const Projectcard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card projectcard" onClick={props.enlace}>
            <img className="card-img-top img-projectcard" src="https://t2.ea.ltmcdn.com/es/posts/8/2/2/tipos_de_pinguinos_21228_600_square.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                <p className="card-text text-start">Fecha limite {props.eta}</p>
                <p className="card-text text-start">Capital Requerido {props.capital}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Categoria: {props.category}</small>
                <Link to={"/editarproyecto/" + props.id}>
                    <button type="button " className="btn btn-dark edit-btt float-end ">Editar</button>
                </Link>
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