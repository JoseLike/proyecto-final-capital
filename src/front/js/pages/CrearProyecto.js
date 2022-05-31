import React, { useState } from "react";
import "../../styles/home.css";

export const CrearProyecto = () => {
  const [info, setInfo] = useState({
    title: "",
    concept: "",
    desired_capital: 0,
    invested_capital: 0,
    category: 0,
    loans: 0,
    business_plan: "",
    patent: false,
    terms: false,
    investment_capacity: "",
    deadline: null,
  });

  const sendNewProject = async () => {
    if (
      (info.title,
      info.concept,
      info.desired_capital,
      info.invested_capital,
      info.category,
      info.loans,
      info.deadline,
      info.business_plan,
      info.investment_capacity !=
        "") /* CORROBORAR QUE SE PUEDE HACER LA COMPROBACION ASI Y SABER COMO SE HACE EN LOS CHECKBOX */
    ) {
      parseInt(info.desired_capital);
      parseInt(info.invested_capital);
      parseInt(info.category);
      parseInt(info.loans);
      const response = await fetch(
        "https://3001-joselike-proyectofinalc-9x2yno4h1l3.ws-eu46.gitpod.io/api/crear-proyecto",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(info),
        }
      );
      const data = await response.json();
      console.log(data);
    } else {
      return alert("Falta informacion de tu proyecto");
    }
  };

  const handleInputChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fondo container bg-light text-dark">
      <div className="barra"></div>
      <div>
        <h3 className="text-center container mt-5">
          Informacion basica del proyecto
        </h3>
        <br />
      </div>
      <h2>
        <input
          placeholder="Titulo de proyecto"
          className="w-100 text-center"
          name="title"
          onChange={handleInputChange}
        ></input>
      </h2>
      <br />
      <br />
      <div className="d-flex container">
        <span className="input-group-text offset-1 w-25">
          Rubro del proyecto:{" "}
        </span>
        <select
          className="form-control w-25"
          id="exampleFormControlSelect1"
          name="category"
          onChange={handleInputChange}
        >
          {/* AQUI TENDRIA QUE HABER UN MAP, DE "CATEGORIAS" */}
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
      </div>
      <br />
      <div className="d-flex container">
        <span className="input-group-text offset-1 w-25">Idea general</span>
        <input
          placeholder="Objetivo del proyecto"
          id="exampleFormControlSelect1"
          className="w-25"
          name="concept"
          onChange={handleInputChange}
        ></input>
      </div>
      <br />
      <div className="d-flex container">
        <span className="input-group-text offset-1 w-25">
          Tiene fecha limite el proyecto??
        </span>
        <input
          type="checkbox"
          id="exampleFormControlSelect1"
          className="w-25"
          name="deadline"
        ></input>
      </div>
      <br />
      <div className="d-flex container">
        <span className="input-group-text offset-1 w-25">Capital deseado</span>
        <input
          placeholder="Capital Deseado"
          id="exampleFormControlSelect1"
          className="w-25"
          name="desired_capital"
          type="number"
          onChange={handleInputChange}
        ></input>
      </div>
      <br />
      <div className="custom-file d-flex container">
        <label
          className="input-group-text custom-file-label offset-1 w-25"
          htmlFor="customFileLang"
        >
          Imagen del proyecto:
        </label>
        <input
          type="file"
          className="custom-file-input w-100"
          name="project_img"
          onChange={handleInputChange}
        ></input>
      </div>
      <br />
      <h3 className="text-center">Estado Financiero del proyecto</h3>
      <br />
      <div className="d-flex container">
        <span className="input-group-text w-25 offset-1">
          Capicidad de inversion
        </span>
        <select
          className="form-control w-25"
          id="exampleFormControlSelect1"
          name="investment_capacity"
          onChange={handleInputChange}
        >
          {/* AQUI TENDRIA QUE HABER UN MAP, DE "CATEGORIAS" */}
          <option>de donde ---- hasta donde</option>
          <option>de donde ---- hasta donde</option>
        </select>
      </div>
      <br />
      <div className="d-flex container">
        <span className="input-group-text offset-1 w-25">
          Deudas del proyecto
        </span>
        <input
          placeholder="Importe"
          className="form-control w-25"
          id="exampleFormControlSelect1"
          name="loans"
          type="number"
          onChange={handleInputChange}
        ></input>
      </div>
      <br />
      <div className="d-flex container">
        <span className="input-group-text offset-1 w-25">
          Capital Invertido a la fecha
        </span>
        <input
          placeholder="Importe"
          className="w-25"
          name="invested_capital"
          type="number"
          onChange={handleInputChange}
        ></input>
      </div>
      <br />
      <div className="justify-content-center container">
        <span className="input-group-text offset-1 w-50">
          {/* CENTRAR Y RECORTAR ESTA LINEA */}
          Cuentanos tu plan de negocio para el proyecto
        </span>
        <input
          placeholder="Texto extenso"
          className="offset-1 w-50 h-75 d-inline-block"
          name="business_plan"
          onChange={handleInputChange}
        ></input>
      </div>
      <br />
      <h3 className="text-center">Estado legal del proyecto</h3>
      <br />
      <div className="d-flex container">
        <span className="input-group-text offset-1 w-50">
          Posee el proyecto actualmente una patente?
        </span>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
          name="patent"
          checked={info.patent}
          onChange={(e) => setInfo({ ...info, patent: e.target.checked })}
        ></input>
      </div>
      <br />
      <div className="d-flex container">
        <span className="input-group-text offset-1 w-50">
          Estas seguro de compartir tu proyecto?
        </span>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
          checked={info.terms}
          onChange={(e) => setInfo({ ...info, terms: e.target.checked })}
        ></input>
      </div>
      <br />
      <div className="custom-file d-flex container" type="file">
        <label
          className="custom-file-label input-group-text offset-1"
          htmlFor="customFileLang"
        >
          Archivos adjuntos al proyecto:
        </label>
        <input type="file" className="custom-file-input w-100"></input>
      </div>
      <br />
      <div className="d-flex mx-auto align-item-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            sendNewProject();
          }}
        >
          Crear proyecto
        </button>
      </div>
    </div>
  );
};
