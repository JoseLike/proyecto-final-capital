import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
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
      "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/buscar-proyecto/",
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
      "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/category/"
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
    <div>
      <br />
      <h1 className="text-center">LOGO INVESTUP</h1>
      <br />
      <div className="bg-secondary container d-flex w-75">
        <div className="d-flex container">
          <span
            className="input-group-text offset-1 w-50"
            name="category_id"
            onChange={handleInputChange}
          >
            Rubro del proyecto:{" "}
          </span>
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

        <div className="bg-secondary container justify-content-center">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Capital
              </label>
            </div>
            <input
              className="custom-select w-50"
              id="inputGroupSelect01"
              name="desired_capital"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            searchProject();
          }}
        >
          Buscar
        </button>
      </div>
      <br />
      <br />

      <div className="bg-secondary d-flex justify-content center container">
        <br />
        <br />
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
