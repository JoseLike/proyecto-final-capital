import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logosimple from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
import ideacolor from "/workspace/proyecto-final-capital/src/front/img/ideacolor.png";
import deal from "/workspace/proyecto-final-capital/src/front/img/deal.png";
import options from "/workspace/proyecto-final-capital/src/front/img/options.png";
import crear from "/workspace/proyecto-final-capital/src/front/img/crear.png";
import recibirmensaje from "/workspace/proyecto-final-capital/src/front/img/recibirmensaje.png";
import growup from "/workspace/proyecto-final-capital/src/front/img/growingup.png";
import inversorcolor from "/workspace/proyecto-final-capital/src/front/img/inversorcolor.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [boton, setBoton] = useState("btn bhome");
  const [btnReg, setBtnReg] = useState("btn bhome");

  return (
    <div>
      <nav className="navbar shadow d-flex justify-content-between">
        <ul className="nav col-2 d-flex justify-content-center">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-twitter-square"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-linkedin"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-facebook-square"></i>
            </a>
          </li>
        </ul>
        <a
          className="navbar-brand col-7 d-flex justify-content-center"
          href="#"
        >
          <img src={logosimple} width="120" height="80" alt="" />
        </a>
        <div className="me-5">
          <Link to={"/register"}>
            <div
              type="button"
              className={btnReg}
              onMouseOver={() => {
                setBtnReg("btn bover");
              }}
              onMouseOut={() => {
                setBtnReg("btn bhome");
              }}
            >
              Registrarse
            </div>
          </Link>
          <Link to={"/login"}>
            <button
              type="button"
              className={boton}
              onMouseOver={() => {
                setBoton("btn bover");
              }}
              onMouseOut={() => {
                setBoton("btn bhome");
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="cabecera1 shadow">
          <div className="d-flex flex-wrap row  mt-4 p-2">
            <div className="col d-flex justify-content-center">
              <img className="img-ilutrator" src={ideacolor} />
            </div>
            <div className="col d-flex align-items-center">
              <p className="principal">
                La primera plataforma que une ideas y capital
              </p>
            </div>
            <div className="col d-flex justify-content-center">
              <img className="img-ilutrator" src={inversorcolor} />
            </div>
          </div>
          <div className="row p-5">
            <div className="col d-flex justify-content-center align-items-center ">
              <img className="img-ilutrator me-5" src={deal} />
              <div className="block">
                <p>Para emprendedores e inversores</p>
                <p>Postea ó Encuentra - Negociar - Exito! </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <h2 className="cabecera2 mt-5 p-4 ps-5 rounded">
            Para nuestros Emprendedores ...
          </h2>
        </div>
        <div className="cabecera2 shadow-lg p-4 rounded">
          <div className="row pt-4">
            <div className="col d-flex justify-content-center align-items-center">
              <img className="img-ilutrator me-5" src={crear} />
              <div className="block rounded">
                <p> Registrate y rellena el formulario de proyecto</p>
                <p> Gestiona tus proyectos desde tu personal view</p>
                <Link to={"/register"}>
                  <button type="button" className="btn btn-outline-light">
                    Registrarme
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col d-flex justify-content-center align-items-center">
              <div className="block me-5">
                <p> Recibe propuestas o preguntas</p>
                <p> Mira las estadisticas de tu proyecto</p>
              </div>
              <img className="img-ilutrator" src={recibirmensaje} />
            </div>
          </div>
        </div>
        <div className="row ">
          <h2 className="cabecera3 mt-5 p-4 ps-5 rounded">
            Querido Inversor ...
          </h2>
        </div>
        <div className="cabecera3 shadow  p-4 rounded">
          <div className="row pt-5">
            <div className="d-flex justify-content-center align-items-center">
              <img className="img-ilutrator me-5" src={growup} />
              <p>
                Haz crecer tu capital<br></br> invirtiendolo en proyectos reales
              </p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col d-flex justify-content-center align-items-center">
              <p className="me-5">
                Selecciona los proyectos que mas encajan <br></br> con tu vision
                o estrategia empresarial
              </p>
              <img className="img-ilutrator rounded" src={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
