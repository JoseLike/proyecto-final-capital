import React, { useContext } from "react";
import { Context } from "../store/appContext";
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

  return (
    <div>
      <nav class="navbar shadow d-flex justify-content-between">
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
        <a class="navbar-brand col-7 d-flex justify-content-center" href="#">
          <img src={logosimple} width="120" height="80" alt="" />
        </a>
        <div
          class="btn-group col-2 btn-group-toggle me-5"
          data-toggle="buttons"
        >
          <button type="button" class="btn btn-outline-primary">
            Login
          </button>
          <button type="button" class="btn btn-outline-primary">
            Register
          </button>
        </div>
      </nav>
      <div className="container">
        <div className="d-flex flex-wrap row border-bottom mt-4 p-2">
          <div className="col d-flex justify-content-center">
            <img className="img-ilutrator" src={ideacolor} />
          </div>
          <div className="col d-flex text-center">
            <p>La primera plataforma que une ideas y capital</p>
          </div>
          <div className="col d-flex justify-content-center">
            <img className="img-ilutrator" src={inversorcolor} />
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center border-bottom">
            <img className="img-ilutrator" src={deal} />
            <p>Para emprendedores e inversores</p>
            <p>Postea ó Encuentra - Negociar - Exito! </p>
          </div>
        </div>
        <div className="row">
          <h1>Si eres Emprendedor/Creador ...</h1>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center border-bottom">
            <img className="img-ilutrator" src={crear} />
            <p> Registrate y rellena el formulario de proyecto</p>
            <p> Gestiona tus proyectos desde tu personal view</p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center border-bottom">
            <p> Recibe propuestas o preguntas</p>
            <p> Mira las estadisticas de tu proyecto</p>
            <img className="img-ilutrator" src={recibirmensaje} />
          </div>
        </div>
        <div className="row">
          <h1>Si eres Inversor ...</h1>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center border-bottom">
            <img className="img-ilutrator" src={growup} />
            <p> Haz crecer tu capital invirtiendolo en proyectos reales</p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center border-bottom">
            <p>
              Selecciona los proyectos que mas encajan con tu vision o
              estrategia empresarial
            </p>
            <img className="img-ilutrator" src={options} />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};
