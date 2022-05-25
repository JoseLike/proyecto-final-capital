import React, { useState } from "react";
import "../../styles/home.css";

export const CrearProyecto = () => {
  const [info, setInfo] = useState({
    title: "",
    concept: "",
    desired_capital: "",
    invested_capital: "",
    category: "",
    loans: "",
    business_plan: "",
    patent: false,
    terms: false,
    investment_capacity: "",
  });

  const sendNewProject = async () => {
    if (
      (info.title,
      info.concept,
      info.desired_capital,
      info.invested_capital,
      info.category,
      info.loans,
      info.business_plan,
      info.investment_capacity !=
        "") /* CORROBORAR QUE SE PUEDE HACER LA COMPROBACION ASI Y SABER COMO SE HACE EN LOS CHECKBOX */
    ) {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
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
    <div className="fondo container">
      <div className="barra">
        <h3 className="text-center">Informacion basica del proyecto</h3>
      </div>
      <input
        placeholder="Titulo de proyecto"
        className="w-100"
        name="title"
        onChange={handleInputChange}
      ></input>
      <div className="d-flex">
        <span className="input-group-text">Rubro del proyecto: </span>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          name="category"
          onChange={handleInputChange}
        >
          {/* AQUI TENDRIA QUE HABER UN MAP, DE "CATEGORIAS" */}
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div className="d-flex ">
        <span className="input-group-text">Capital deseado</span>
        <input
          placeholder="Capital Deseado"
          className="w-100"
          name="desired_capital"
          onChange={handleInputChange}
        ></input>
      </div>
      <div class="custom-file d-flex">
        <label class="custom-file-label" for="customFileLang">
          Imagen del proyecto:
        </label>
        <input
          type="file"
          className="custom-file-input w-100"
          name="project_img"
          onChange={handleInputChange}
        ></input>
      </div>
      <h3 className="text-center">Estado Financiero del proyecto</h3>
      <div className="d-flex">
        <span className="input-group-text">Capicidad de inversion</span>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          name="investment_capacity"
          onChange={handleInputChange}
        >
          {/* AQUI TENDRIA QUE HABER UN MAP, DE "CATEGORIAS" */}
          <option>de donde ---- hasta donde</option>
          <option>de donde ---- hasta donde</option>
        </select>
      </div>
      <div className="d-flex">
        <span className="input-group-text">
          Importe de actuales deudas del proyecto
        </span>
        <input
          placeholder="Importe"
          name="loans"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="d-flex">
        <span className="input-group-text">Capital Invertido a la fecha</span>
        <input
          placeholder="Importe"
          className="w-100"
          name="invested_capital"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="justify-content-center">
        <span className="input-group-text">
          {/* CENTRAR Y RECORTAR ESTA LINEA */}
          Cuentanos tu plan de negocio para el proyecto
        </span>
        <input
          placeholder="Texto extenso"
          className="w-100"
          name="business_plan"
          onChange={handleInputChange}
        ></input>
      </div>
      <h3 className="text-center">Estado legal del proyecto</h3>
      <div className="d-flex">
        <span className="input-group-text">
          Posee el proyecto actualmente una patente?
        </span>
        <input
          type="checkbox"
          className="custom-control-input w-15"
          id="customCheck1"
          name="patent"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="d-flex ">
        <span className="input-group-text">
          Estas seguro de compartir tu proyecto?
        </span>
        <input
          type="checkbox"
          className="custom-control-input ml-10"
          id="customCheck1"
        ></input>
      </div>
      <div class="custom-file d-flex">
        <label class="custom-file-label" for="customFileLang">
          Archivos adjuntos al proyecto:
        </label>
        <input type="file" className="custom-file-input w-100"></input>
      </div>
      <button>crear proyecto</button>
    </div>
  );
};
