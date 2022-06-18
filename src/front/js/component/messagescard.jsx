import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "/workspace/proyecto-final-capital/src/front/styles/personalview.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const MessagesCard = (props) => {
  const { store, actions } = useContext(Context);
  const [MessageView, setMessageView] = useState(<><div className="card-header">Enviado por: {props.emisor}  /  Asunto: {props.subject}</div>
  </>);
  let navigate = useHistory();
  const [mensaje, setMensaje] = useState({
    project_id: null,
    receiver_id: null,
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
  const sendNewMessage = async () => {
    if (
      (mensaje.subject,
        mensaje.receiver_user,
        mensaje.text !=
        "") /* CORROBORAR QUE SE PUEDE HACER LA COMPROBACION ASI Y SABER COMO SE HACE EN LOS CHECKBOX */
    ) {
      const response = await fetch(
        "https://3001-joselike-proyectofinalc-5r81xxko7fm.ws-eu47.gitpod.io/api/send-message",
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

  return (<>

    <div className="card bg-light mb-3" style={{ "maxWidth": "100%" }} onClick={() => setMessageView(<><div className="card-header">Enviado por: {props.emisor}</div>
      <div className="card-body">
        <h5 className="card-title">{props.subject}</h5>
        <p className="card-text">{props.texto}</p>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop" onClick={() => { setMensaje(...mensaje, { project_id: props.project_id, receiver_id: props.emisor }) }}>Responder</button>
      </div></>)} >
      {MessageView}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Enviar Mensaje
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>Destinatario: {props.sender_id}</div>
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => sendNewMessage()}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  );
};

MessagesCard.propTypes = {
  project_id: PropTypes.number,
  subject: PropTypes.string,
  emisor: PropTypes.number,
  texto: PropTypes.string,
};
