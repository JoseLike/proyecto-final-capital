import React, { useState, useEffect } from "react";

export const BuscarProyecto = () => {
  const [find, setFind] = useState({
    category_id: "",
    desired_capital: "",
  });

  const [cate, setCate] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const response = await fetch(
      "https://3001-joselike-proyectofinalc-9x2yno4h1l3.ws-eu46.gitpod.io/api/projects/"
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
      <div className="bg-secondary container d-flex w-100">
        <div className="d-flex container">
          <span
            className="input-group-text offset-1 w-25"
            name="category"
            onChange={handleInputChange}
          >
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

        <div className="bg-secondary container justify-content-center">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Capital
              </label>
            </div>
            <input
              className="custom-select w-50"
              id="inputGroupSelect01"
              name="capital"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Buscar
        </button>
      </div>
      <br />
      <br />

      {/*       <div className="bg-secondary container">
        <div className="card projectcard" onClick={props.enlace}>
          <img
            className="card-img-top"
            src="https://t2.ea.ltmcdn.com/es/posts/8/2/2/tipos_de_pinguinos_21228_600_square.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title text-center">
              Nombre Proyecto{props.name}
            </h5>
            <p className="card-text text-start">Fecha limite {props.eta}</p>
            <p className="card-text text-start">
              Capital Requerido: {props.capital}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Fecha limite {props.category}</small>
          </div>
        </div>
      </div>  */}
    </div>
  );
};
