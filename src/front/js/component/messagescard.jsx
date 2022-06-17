import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "/workspace/proyecto-final-capital/src/front/styles/personalview.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const MessagesCard = (props) => {
  const { store, actions } = useContext(Context);
  const [icono, seticono] = useState("fa-regular fa-star");
  let navigate = useHistory();

  return (<>

    <div className="card bg-light mb-3" style={{ "maxWidth": "100%" }}>
      <div className="card-header">Enviado por: {props.emisor}</div>
      <div className="card-body">
        <h5 className="card-title">Light card title</h5>
        <p className="card-text">{props.texto}</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
      </div>
    </div>
  </>
  );
};

MessagesCard.propTypes = {
  emisor: PropTypes.string,
  texto: PropTypes.number,
};
