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
  const handleImageChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.files,
    });
  };

  const uploadImage = (evt) => {
    evt.preventDefault();
    console.log("aqui esta el archivo@@@@@@@@@@@", info);
    let body = new FormData();
    body.append("project_picture", info.project_picture[0]);
    const options = {
      method: "POST",
      body: body,
    };
    fetch(store.url + "/upload", options)
      .then((resp) => resp.json())
      .then((data) => console.log("Exito"), data)
      .catch((error) => console.error("ERROOOOOOR"), error);
  };

  return (
    <div>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <input
          type="file"
          className="custom-file-input"
          name="project_picture"
          onChange={handleImageChange}
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
