import React from "react";
import "../../styles/home.css";

export const CrearProyecto = () => {
  return (
    <div className="fondo container">
      <div className="barra">
        <h3 className="text-center">Informacion basica del proyecto</h3>
      </div>
      <input placeholder="Titulo de proyecto" className="w-100"></input>
      <div className="d-flex">
        <p>Categoria: </p>
        <select class="form-control" id="exampleFormControlSelect1">
          {/* AQUI TENDRIA QUE HABER UN MAP, DE "CATEGORIAS" */}
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div className="d-flex ">
        <p>Capital deseado</p>
        <input placeholder="Capital Deseado" className="w-100"></input>
      </div>
      <div class="custom-file d-flex">
        <label class="custom-file-label" for="customFileLang">
          Imagen del proyecto:
        </label>
        <input type="file" className="custom-file-input w-100"></input>
      </div>
      <h3 className="text-center">Estado Financiero del proyecto</h3>
      <div className="d-flex">
        <p>Capicidad de inversion</p>
        <select class="form-control" id="exampleFormControlSelect1">
          {/* AQUI TENDRIA QUE HABER UN MAP, DE "CATEGORIAS" */}
          <option>de donde ---- hasta donde</option>
          <option>de donde ---- hasta donde</option>
        </select>
      </div>
      <div className="d-flex">
        <p>Importe de actuales deudas del proyecto</p>
        <input placeholder="Importe"></input>
      </div>
      <div className="d-flex">
        <p>Capital Invertido a la fecha</p>
        <input placeholder="Importe" className="w-100"></input>
      </div>
      <div className="d-flex">
        <p>Cuentanos tu plan de negocio para el proyecto</p>
        <input placeholder="Texto extenso" className="w-100"></input>
      </div>
      <h3 className="text-center">Estado legal del proyecto</h3>
      <div className="d-flex">
        <p>Posee el proyecto actualmente una patente?</p>
        <input
          type="checkbox"
          className="custom-control-input w-15"
          id="customCheck1"
        ></input>
      </div>
      <div className="d-flex ">
        <p className="">Estas seguro de compartir tu proyecto?</p>
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
