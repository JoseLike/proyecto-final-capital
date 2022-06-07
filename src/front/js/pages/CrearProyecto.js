import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const CrearProyecto = () => {
  const { store, actions } = useContext(Context);
  let navigate = useHistory();
  const [info, setInfo] = useState({
    title: "",
    user_id: store.current_user.id,
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

  const [cate, setCate] = useState([]);

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
        "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu46.gitpod.io/api/crear-proyecto",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(info),
        }
      );
      const data = await response.json();
      navigate.push("/personal");
      console.log(data);
    } else {
      return alert("Falta informacion de tu proyecto");
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const response = await fetch(
      "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu46.gitpod.io/api/category/"
    );
    const data = await response.json();
    console.log(data.cate);
    setCate(data.cate);
  };

  const handleInputChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Link to={"/personal"}>
        <i className="fa-solid btn-flotante-atras fa-arrow-left arrow-left-reg1 icono-back col-1 ms-4 fixed"></i>
      </Link>
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
            {cate.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
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
          <span className="input-group-text offset-1 w-25">
            Capital deseado
          </span>
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
            className="custom-file-input w-25"
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
        <div className=" container d-flex">
          <span className="input-group-text offset-1 w-25">
            {/* CENTRAR Y RECORTAR ESTA LINEA */}
            Cuentanos tu plan de negocio para el proyecto
          </span>
          <textarea
            placeholder="Texto extenso"
            className=" w-100 d-inline-block"
            name="business_plan"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <br />
        <h3 className="text-center">Estado legal del proyecto</h3>
        <br />
        <div className="d-flex container">
          <span className="input-group-text offset-1 w-25">
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
          <span className="input-group-text offset-1 w-25">
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
            className="custom-file-label input-group-text  w-25 offset-1"
            htmlFor="customFileLang"
          >
            Archivos adjuntos al proyecto:
          </label>
          <input type="file" className="custom-file-input w-25"></input>
        </div>
        <br />
        <div className="d-flex justify-content-center">
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
    </>
  );
};
