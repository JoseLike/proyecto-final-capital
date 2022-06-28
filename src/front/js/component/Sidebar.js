import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import "../../styles/sidebar2.css";
import { useHistory } from "react-router-dom";

export const Sidebar = () => {
  let navigate = useHistory();
  const { store, actions } = useContext(Context);

  {
    if (store.current_user.user_type != 2) {
      return (
        <>
          <div
            className="d-flex flex-column flex-shrink-0 bg-light sidebar-ops "
            style={{ width: "120px" }}
          >
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
              <li className="nav-item  ">
                <Link to="/personal">
                  <a href="#" className="nav-link active py-3 border-bottom">
                    <i className="fa fa-home"></i> <small>Home</small>
                  </a>
                </Link>
              </li>
              <li className="">
                <a
                  href="#"
                  className="nav-link py-3 border-bottom"
                  data-bs-toggle="dropdown"
                >
                  <i className="far fa-credit-card-front"></i>
                  <small>Proyectos</small>
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdownUser3"
                >
                  <li>
                    <Link to="/personal">
                      <div className="dropdown-item">Proyectos Favoritos</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/buscarproyecto">
                      <div className="dropdown-item">Buscar Proyectos</div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/messages">
                  <div href="#" className="nav-link py-3 border-bottom">
                    <i className="fas fa-envelope"></i>
                    <small>Mensajes</small>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/stadistics">
                  <div href="#" className="nav-link py-3 border-bottom">
                    <i className="fa fa-cog icono-estadisticas-sidebar fa-xl"></i>{" "}
                    <small>Estadisticas</small>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/premium">
                  <div href="#" className="nav-link py-3 border-bottom">
                    <i className="fa fa-bookmark icono-premium-sidebar fa-xl"></i>{" "}
                    <small>Premium</small>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="dropdown border-top">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={store.current_user.profile_picture}
                  alt="mdo"
                  width="50"
                  height="50"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser3"
              >
                <li>
                  <Link to="/account">
                    <div className="dropdown-item" href="#">
                      Mi Cuenta
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/">
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        actions.logOut();
                      }}
                    >
                      Sign out
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className="d-flex flex-column flex-shrink-0 bg-light sidebar-ops"
            style={{ width: "120px" }}
          >
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
              <li className="nav-item  ">
                <a href="#" className="nav-link active py-3 border-bottom">
                  <i className="fa fa-home"></i> <small>Home</small>
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="nav-link py-3 border-bottom"
                  data-bs-toggle="dropdown"
                >
                  <i className="fas fa-credit-card-front"></i>
                  <small>Proyectos</small>
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdownUser3"
                >
                  <li>
                    <Link to="/personal">
                      <div className="dropdown-item">Ver mis proyectos</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/crearproyecto">
                      <div className="dropdown-item">Crear Proyectos</div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/messages">
                  <div href="#" className="nav-link py-3 border-bottom">
                    <i className="fas fa-envelope"></i>
                    <small>Mensajes</small>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/stadistics">
                  <div href="#" className="nav-link py-3 border-bottom">
                    <i className="fa fa-cog"></i> <small>Estadisticas</small>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/premium">
                  <div href="#" className="nav-link py-3 border-bottom">
                    <i className="fa fa-bookmark"></i> <small>Premium</small>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="dropdown border-top">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={store.current_user.profile_picture}
                  alt="mdo"
                  width="50"
                  height="50"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser3"
              >
                <li>
                  <Link to="/account">
                    <div className="dropdown-item" href="#">
                      Mi Cuenta
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      actions.logOut();
                    }}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    }
  }
};
