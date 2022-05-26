import React, { useState } from "react";
import "../../styles/home.css";

export const CuadroPremium = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-center">Por que hacerte premium??</h2>
        <h3 className="text-center">Mira las ventajas</h3>
      </div>
      <div className="d-flex justify-content-center container">
        <div className="cuadroRegular p-5 border border-dark w-50">
          <div>
            <h3 className="text-center">Cuenta regular</h3>
          </div>
          <div>
            <h4>Emprendedor</h4>
            <p>Proyectos disponibles: 1</p>
            <p>Maximo de visitas diarias: 50</p>
            <p>Capital Maximo del proyecto: 3.000€</p>
          </div>
          <div>
            <h4>Inversor</h4>
            <p>Veras los proyectos despues de: 5 dias</p>
            <p>Podras visitar un maximo de: 10 proyectos diarios</p>
            <p>Podras contactar con tan solo : 2 proyectos diarios</p>
          </div>
        </div>

        <br />

        <div className="cuadroPremium p-5 border border-dark w-50">
          <div>
            <h3 className="text-center">Cuenta Premium</h3>
          </div>
          <div>
            <h4>Emprendedor</h4>
            <p>Proyectos disponibles: Ilimitados</p>
            <p>Maximo de visitas diarias: Ilimitadas</p>
            <p>Capital Maximo del proyecto: Ilimitado</p>
          </div>
          <div>
            <h4>Inversor</h4>
            <p>Veras los proyectos: Al momento </p>
            <p>Podras visitar un maximo de: Ilimitado</p>
            <p>Podras contactar con tan solo : Ilimitado</p>
          </div>
          <div className="d-flex justify-content-center ">
            <h3 className="border border-dark p-2">20€ al mes</h3>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <button className="btn btn-success offset-10">Hacerme Premium</button>
      </div>
    </div>
  );
};
