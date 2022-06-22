import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import logosimple from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
import "../../styles/projectview.css";

export const ProjectView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  const [mensaje, setMensaje] = useState({
    project_id: Number(theid),
    receiver_id: store.project_user.id,
    sender_id: store.current_user.id,
    subject: "",
    text: "",
    readed: false,
  });

  const handleInputChange = (e) => {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    actions.getSingleProject(theid);
  }, []);
  /*   useEffect(() => {
    actions.getProjectUserData(theid);
  }, []); */

  const sendNewMessage = async () => {
    if (
      (mensaje.subject,
      mensaje.receiver_user,
      mensaje.text !=
        "") /* CORROBORAR QUE SE PUEDE HACER LA COMPROBACION ASI Y SABER COMO SE HACE EN LOS CHECKBOX */
    ) {
      const response = await fetch(
        "https://proyecto-final-investup.herokuapp.com/api/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mensaje),
        }
      );
      const data = await response.json();
      console.log(data);
    } else {
      return alert("Fallo en el mensaje");
    }
  };

  return (
    <div className="container-fluid m-3  rounded shadow p-3">
      <div className="topdata row d-flex justify-content-center">
        <div className="projectdata col-md-5 ">
          <div className="projectname border rounded mb-3 shadow text-center">
            <h1>{store.singleproject.title}</h1>
          </div>
          <div className="border project-data-single rounded p-2 shadow p-3">
            <div className="projectdescripttion ">
              {store.singleproject.concept}
            </div>
          </div>
          <div className="projectETA d-flex mt-3 border project-data-single rounded p-2 shadow p-3">
            <div className="text me-4">Fecha limite: </div>
            <div className="text">{store.singleproject.deadline}</div>
          </div>
          <div className="projectcategory d-flex mt-3 border project-data-single rounded p-2 shadow p-3">
            <div className="text me-4">Categoria:</div>
            <div className="text">{store.singleproject.category_id}</div>
          </div>
        </div>
        <div className="projectphoto col-md-5 ">
          <img
            className="img-fluid shadow imagen-proyecto-single"
            src="https://images.ecestaticos.com/pqIAcGCEagnkjdIBVKVbC9i5FH4=/0x0:1920x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8e%2Fe27%2F2bf%2Fe8ee272bfd36f69679936351209d708c.jpg"
            alt="projectphoto"
          />
        </div>
      </div>
      <div className="projectcapital row  ">
        <div className="col-10 border rounded shadow p-3 mx-auto d-flex">
          <div className="col-3">Capital Requerido</div>
          <div className="col-2">{store.singleproject.desired_capital}</div>
          <div className="col-3">Capital Obtenido</div>
          <div className="col-2">{store.singleproject.raised_capital}</div>
        </div>
      </div>
      <div className="businessplan row mt-4 ">
        <div className="col-10 border rounded shadow p- mx-auto">
          <h1 className="border-bottom border-3 border-secondary p-2">
            Plan de Negocio
          </h1>
          <div className="m-2">{store.singleproject.business_plan}</div>
        </div>
      </div>
      <div className="row  attachedocuments mt-4">
        <div className="projectcapital col-10 border rounded d-flex shadow p-3 mx-auto">
          <div className="col-3">Documentos aportados:</div>
          <div className="col-7">tuvi.pdf</div>
        </div>
      </div>
      <div className="row emprendeurperfil mt-4 d-flex justify-content-evenly ">
        <div className="col-md-5 align-items-center d-flex justify-content-center ">
          <div
            type="button"
            className="btn-contactar shadow text-center d-flex align-items-md-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Contactar
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-start">
          <div className="card  shadow " style={{ width: "18rem" }}>
            <img
              src="data:image/jpeg;base64,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"
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{store.project_user.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ranking: </li>
              <li className="list-group-item">Desde: </li>
              <li className="list-group-item">Proyectos publicados: </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/inversorpay">
        <div href="#" className="btn-flotante  ">
          Invertir
        </div>
      </Link>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Enviar Mensaje
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>Destinatario: {store.project_user.name}</div>
              <div>De: {store.current_user.name}</div>
              <input
                placeholder="Asunto"
                id="exampleFormControlSelect1"
                className="w-50 mt-3"
                name="subject"
                onChange={handleInputChange}
              ></input>
              <input
                placeholder="Escribe aqui"
                id="exampleFormControlSelect1"
                className="w-100 mt-3"
                name="text"
                onChange={handleInputChange}
              ></input>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => sendNewMessage()}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
