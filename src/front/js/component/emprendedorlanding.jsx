import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "/workspace/proyecto-final-capital/src/front/styles/personalview.css";
import { Link } from "react-router-dom";
import { Projectcard } from "/workspace/proyecto-final-capital/src/front/js/component/projectscard.jsx";
import PropTypes from 'prop-types';

export const EmprendedorLanding = (props) => {

    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.getUserProjects();
    }, []);

    return (<div className="container mt-5">
        <div className="personal-title-row row">
            <div className="personal-title text-center">
                Bienvenido a tu vista personal como Emprendedor
            </div>
        </div>
        <div className="personal-title-row row">
            <div className="personal-title text-center mt-4">Tus Proyectos</div>
            <div className="d-flex">
                {store.user_projects.map((projects) => {
                    return (<Projectcard
                        key={projects.id}
                        id={projects.id}
                        category={projects.category_id}
                        name={projects.title}
                        eta={projects.deadline}
                        capital={projects.desired_capital}
                    />)
                })}

            </div>
        </div>
        <Link to="/crearproyecto">
            <div href="#" className="btn-flotante text-center align-items-center">
                Crear Proyecto
                <i className="fa-duotone fa-plus fa-2xl"></i>
            </div>
        </Link>
    </div>
    )

};
