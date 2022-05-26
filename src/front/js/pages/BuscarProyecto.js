import React from "react";

export const BuscarProyecto = () => {
  return (
    <div>
      <br />
      <h1 className="text-center">LOGO INVESTUP</h1>
      <br />
      <div className="bg-secondary container d-flex w-50">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label
              className="input-group-text d-flex justify-content-center"
              for="inputGroupSelect01"
            >
              Categorias
            </label>
          </div>
          <select className="custom-select w-50" id="inputGroupSelect01">
            <option selected>Choose...</option> {/* MAP DE LAS CATEGORIAS */}
          </select>
        </div>

        <div className="bg-secondary container justify-content-center">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">
                Capital
              </label>
            </div>
            <select className="custom-select w-50" id="inputGroupSelect01">
              <option selected>Choose...</option> {/* MAP DE LAS CAPITAL */}
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Buscar
        </button>
      </div>
      <br />
      <br />

      <div className="bg-secondary container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
