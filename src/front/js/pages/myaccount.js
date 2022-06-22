import React, { useContext, useState, useEffect } from "react";
import logo2 from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/myaccount.css";

export const MyAccount = () => {
  const { store, actions } = useContext(Context);

  const [changedata, setChangedata] = useState({
    name: store.current_user.name,
    last_name: store.current_user.last_name,
    email: store.current_user.email,
    password: "",
    profile_picture: null,
  });

  const verify_email = (email) => {
    let regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  };

  const verify_password = (password) => {
    let exregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return exregex.test(password) ? true : false;
  };

  const sendChangeRequest = async () => {
    if (changedata.email != null) {
      if (verify_email(changedata.email) != true) {
        alert("El formato del email no es valido");
      } else {
        actions.changeUserInfo(changedata);
      }
    } else {
      return alert("Falta informacion");
    }
  };

  const sendPassChanges = async () => {
    if (verify_password(changedata.password) != true) {
      alert("La contraseña no es valida");
    } else {
      actions.changeUserPassword(changedata);
    }
  };

  const handleInputChange = (event) => {
    setChangedata({
      ...changedata,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (e) => {
    setChangedata({
      ...changedata,
      [e.target.name]: e.target.files[0],
    });
  };

  const uploadImage = (evt) => {
    evt.preventDefault();
    console.log("aqui esta el archivo@@@@@@@@@@@", changedata);
    let body = new FormData();
    body.append("profile_picture", changedata.profile_picture);
    const options = {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: body,
    };
    fetch("https://proyecto-final-investup.herokuapp.com//api/subir", options);
  };

  return (
    <div>
      <div className="container-fluid mt-1  rounded shadow p-3">
        <div className="">
          <Link to="/personal">
            <i className="fa-solid btn-flotante-atras fa-arrow-left arrow-left-reg1 icono-back col-1 ms-4 fixed"></i>
          </Link>
        </div>
        <div className="container mt-2  rounded shadow p-3">
          <div className="projectname mb-3 text-center">
            <h1>Mi Cuenta</h1>
          </div>
          <div className="topdata row ">
            <div className="projectdata col-5 mx-auto">
              <div className="border rounded p-2 shadow p-3">
                <div className="accountdata mt-3">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                      Nombre
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={store.current_user.name}
                      name="name"
                      aria-label="name"
                      aria-describedby="addon-wrapping"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group flex-nowrap pt-1">
                    <span className="input-group-text" id="addon-wrapping">
                      Apellidos
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={store.current_user.last_name}
                      name="last_name"
                      aria-label="last_name"
                      aria-describedby="addon-wrapping"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-group flex-nowrap pt-1">
                    <span className="input-group-text" id="addon-wrapping">
                      Email
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={store.current_user.email}
                      aria-label="email"
                      name="email"
                      aria-describedby="addon-wrapping"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group flex-nowrap pt-1">
                    <span className="input-group-text" id="addon-wrapping">
                      Pais/Region
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={store.current_user.country}
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      disabled
                    />
                  </div>
                  <div className="div-btt-sendchanges mt-2 ">
                    <button
                      type="button"
                      className="btn btn-warning btt-sendchanges"
                      onClick={sendChangeRequest}
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="userphoto col-5 d-flex flex-column">
              <div className="mb-3">
                <img
                  className="img-fluid shadow"
                  src={store.current_user.profile_picture}
                  alt="projectphoto"
                />
              </div>
              <div className="mb-3 mx-auto ">
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={handleImageChange}
                  name="profile_picture"
                />
                <button
                  type="button"
                  className="btn btn-warning btt-sendchanges"
                  onClick={uploadImage}
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
          <div className="changepassword mt-5 d-flex ">
            <button
              type="button"
              className="btn btn-secondary col-2  m-3"
              onClick={sendPassChanges}
            >
              Cambiar Contraseña
            </button>
            <div className="input-group col mt-2">
              <span className="input-group-text span-pass" id="addon-wrapping">
                Nueva Contraseña
              </span>
              <input
                type="text"
                className="form-control inpt-pass"
                placeholder="8 Caracteres - Min 1 Letra y 1 Numero"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="row mt-5 mb-4">
            <div className="premiumstatus col-10 border rounded d-flex shadow p-3">
              <div className="col-3">Premium Status: </div>
              <div className="col-4">
                {store.current_user.is_premium != true ? (
                  <div>
                    No eres premium
                    <Link to="/premium">
                      <button type="button" className="btn btn-success ms-4">
                        Hacerse Premium
                      </button>
                    </Link>
                  </div>
                ) : (
                  "Usuario Premium"
                )}
              </div>
            </div>
          </div>
          <div className="emprendeurperfil mt-5 mb-5  ">
            <div className="card mx-auto shadow" style={{ width: "18rem" }}>
              <img
                src={store.current_user.profile_picture}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  {store.current_user.name} {store.current_user.last_name}
                </h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Ranking: </li>
                <li className="list-group-item">Desde: </li>
                <li className="list-group-item">Proyectos publicados: </li>
              </ul>
            </div>
            <div className="row float-end">
              <button type="button" className="btn btn-danger ">
                Eliminar cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
