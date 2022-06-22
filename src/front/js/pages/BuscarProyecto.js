import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import logo2 from "../../img/logo2";
import { Link } from "react-router-dom";
import "../../styles/buscarproyecto.css";

import { InvestorCard } from "/workspace/proyecto-final-capital/src/front/js/component/investorcard.jsx";

export const BuscarProyecto = () => {
  const { store, actions } = useContext(Context);
  const [find, setFind] = useState({
    category_id: "",
    desired_capital: "",
  });

  const [projects, setProjects] = useState([]);

  const searchProject = async () => {
    const response = await fetch(
      "https://3001-joselike-proyectofinalc-9x2yno4h1l3.ws-eu47.gitpod.io/api/buscar-proyecto/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(find),
      }
    );
    const data = await response.json();
    setProjects(data.projects);
  };

  const [cate, setCate] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const response = await fetch(
      "https://3001-joselike-proyectofinalc-9x2yno4h1l3.ws-eu47.gitpod.io/api/category/"
    );
    const data = await response.json();
    console.log(data.cate);
    setCate(data.cate);
  };

  const handleInputChange = (e) => {
    setFind({
      ...find,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid">
      <div className="contenedor-busqueda rounded d-flex row justify-content-center border m-4 p-3">
        <div className="d-flex div-categorias col-4">
          <div
            className="input-group-text offset-1 w-50"
            name="category_id"
            onChange={handleInputChange}
          >
            Rubro del proyecto:
          </div>
          <select
            className="form-control w-50"
            id="exampleFormControlSelect1"
            name="category_id"
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
        <div className="d-flex div-capital col-4">
          <div className="input-group d-flex">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Capital
              </label>
            </div>
            <input
              className="custom-select w-50 text-center"
              id="inputGroupSelect01"
              name="desired_capital"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary col-2"
          onClick={() => {
            searchProject();
          }}
        >
          Buscar
        </button>
      </div>

      <div className="bg-secondary d-flex justify-content center container">
        <div className="d-flex container justify-content-center">
          {projects.map((projects) => {
            return (
              <div className="p-2">
                <InvestorCard
                  key={projects.id}
                  id={projects.id}
                  category={projects.category_id}
                  name={projects.title}
                  eta={projects.deadline}
                  capital={projects.desired_capital}
                  fav={() => {
                    let send = {
                      project_id: projects.id,
                      user_id: store.current_user.id,
                    };
                    actions.addToFavs(send);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
