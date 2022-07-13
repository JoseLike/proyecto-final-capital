import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import logosimple from "../../img/logosimple.png";
import "../../styles/projectview.css";
import moment from "moment";

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
      const response = await fetch(store.url + "/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mensaje),
      });
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
            src={store.singleproject.project_picture}
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
              <h5 className="card-title">
                {store.project_user.name} {store.project_user.last_name}{" "}
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Es usuario de Investup desde:{" "}
                {moment(store.current_user.longevity).format("ll")}{" "}
              </li>
              <li className="list-group-item">
                Proyectos publicados: {"4 proyectos hasta hoy"}
              </li>
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
