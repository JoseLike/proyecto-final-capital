import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const UploadView = () => {
  const { store, actions } = useContext(Context);
  const [info, setInfo] = useState({
    project_picture: null,
    otros: "",
  });
  const handleInputChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.files,
    });
  };

  const uploadImage = (evt) => {
    evt.preventDefault();
    console.log("aqui esta el archivo@@@@@@@@@@@", info);
  };

  let body = new FormData();
  body.append("project_picture");

  return (
    <div>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <input
          type="file"
          className="custom-file-input"
          name="project_picture"
          onChange={handleInputChange}
        ></input>
        <button className="btn btn-secondary" onClick={uploadImage}>
          Crear proyecto
        </button>
      </div>
    </div>
  );
};

UploadView.prototypes = {
  match: PropTypes.object,
};
