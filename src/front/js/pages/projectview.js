import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import logosimple from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
import "../../styles/projectview.css";

export const ProjectView = () => {
  const { store, actions } = useContext(Context);
  const [boton, setBoton] = useState("btn bhome");
  const [btnReg, setBtnReg] = useState("btn bhome");

  const { theid } = useParams();

  //useEffect(() => {
  //actions.getSingleProject(theid);
  //}, []);

  return (
    <div className="container mt-5">
      <div className="topdata row">
        <div className="projectdata col-6">
          <div className="projectname border rounded mb-3">
            <h1>Nombre del proyecto</h1>
          </div>
          <div className="border rounded p-2 ">
            <div className="projectdescripttion ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur
            </div>
            <div className="projectETA d-flex mt-3">
              <div className="text-p me-4">Fecha limite</div>
              <div className="text-p">20/11/2022</div>
            </div>
            <div className="projectcategory d-flex">
              <div className="text-p me-4">Category</div>
              <div className="text-p">SALUD</div>
            </div>
          </div>
        </div>
        <div className="projectphoto col-7">
          <img
            className="img-thumbnail"
            src="https://images.ecestaticos.com/pqIAcGCEagnkjdIBVKVbC9i5FH4=/0x0:1920x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8e%2Fe27%2F2bf%2Fe8ee272bfd36f69679936351209d708c.jpg"
            alt="projectphoto"
          />
        </div>
      </div>
      <div className="projectcapital row border rounded">
        <div></div>
      </div>
      <div className="businessplan"></div>
      <div className="attachedocuments"></div>
      <div className="emprendeurperfil">
        <div className="emprendeurphoto"></div>
        <div className="emprendeurname"></div>
        <div className="emprendeurlastname"></div>
      </div>
      <div className="emprendeurdata">
        <div className="emprendeursignup"></div>
        <div className="emprendeurranking"></div>
        <div className="emprendeurprojectquantity"></div>
      </div>
    </div>
  );
};
