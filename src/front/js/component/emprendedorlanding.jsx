import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "/workspace/proyecto-final-capital/src/front/styles/personalview.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { Projectcard } from "/workspace/proyecto-final-capital/src/front/js/component/projectscard.jsx";
import PropTypes from 'prop-types';

export const EmprendedorLanding = (props) => {
    const { store, actions } = useContext(Context);

    return (<div className="container mt-5">
        <div className="personal-title-row row">
            <div className="personal-title text-center">
                Bienvenido a tu vista personal
            </div>
        </div>
        <div className="personal-title-row row">
            <div className="personal-title text-center mt-4">Tus Proyectos</div>
            <div className="">
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
                Buscar Proyectos
                <i className="fa-duotone fa-plus fa-2xl"></i>
            </div>
        </Link>
    </div>
    )

};

Projectcard.propTypes = {
    category: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    capital: PropTypes.number,
    eta: PropTypes.string,
    enlace: PropTypes.func
};