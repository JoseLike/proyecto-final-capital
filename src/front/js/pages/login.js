import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo2 from "/workspace/proyecto-final-capital/src/front/img/logo2.png";
import "../../styles/login-styles.css";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  let navigate = useHistory();
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const verify_email = (a) => {
    let regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(a) ? true : false;
  };

  const verify_password = (password) => {
    let exregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return exregex.test(password) ? true : false;
  };

  const verify = () => {
    if (verify_email(datos.email) != true) {
      alert("El formato del email no es valido");
    }
    if (verify_password(datos.password) != true) {
      alert("Contraseña invalida");
    } else {
      actions.sendUserInfo(datos);
      navigate.push("/personal");
    }
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row rw-logo mt-6 align-items-center text-center mx-auto">
        <div className="col-2 m-auto">
          <Link to="./">
            <img className="logo-login m-auto" src={logo2} alt="logo"></img>
          </Link>
        </div>
      </div>
      <div className="row rw-main-box ">
        <div className="col-6 main-box m-auto rounded justify-content-center p-5">
          <Link to="./">
            <i className="fa-solid fa-arrow-left icono-back"></i>
          </Link>
          <div className="m-auto">
            <h1 className="login-title text-center">Login</h1>
          </div>
          <div className="d-flex align-items-center cont-email-login">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="email"
                id="form3Example3c"
                className="form-control"
                placeholder="email@email.com"
                onChange={handleInputChange}
                name="email"
              />
            </div>
          </div>
          <div className="d-flex align-items-center cont-email-password">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="form3Example4c"
                className="form-control"
                placeholder="xxxxxxxxx"
                onChange={handleInputChange}
                name="password"
              />
            </div>
          </div>
          <div className="row justify-content-center pt-4">
            <button
              type="button "
              className="col-3 btn btn-outline-success"
              onClick={() => verify()}
            >
              Acceder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
