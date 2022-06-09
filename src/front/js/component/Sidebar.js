import React from "react";
import "/workspace/proyecto-final-capital/src/front/styles/home.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "../../styles/sidebar2.css";

export const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 bg-light vh-100"
        style={{ width: "120px" }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="#" className="nav-link active py-3 border-bottom">
              <i className="fa fa-home"></i> <small>Home</small>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom">
              <i class="far fa-credit-card-front"></i>
              <small>Proyectos</small>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom">
              <i class="fas fa-envelope"></i>
              <small>Mensajes</small>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom">
              <i className="fa fa-cog"></i> <small>Estadisticas</small>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom">
              <i className="fa fa-bookmark"></i> <small>Premium</small>
            </a>
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
              src="https://github.com/mdo.png"
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
              <a className="dropdown-item" href="#">
                Proyectos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Mi Cuenta
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
