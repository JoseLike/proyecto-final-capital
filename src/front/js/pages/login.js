import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo2 from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
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

  const verify = async () => {
    if (verify_email(datos.email) != true) {
      alert("El formato del email no es valido");
    }
    if (verify_password(datos.password) != true) {
      alert("Contraseña invalida");
    } else {
      await actions.sendUserInfo(datos);

      if (store.logged == true) {
        navigate.push("/personal");
      } else {
        alert("sorry");
      }
    }
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container-fluid generaldiv p-4">
      <div className=" main-box-login m-auto p-2 rounded justify-content-center">
        <div className="p-3  div-arrow-login">
          <Link to={"./"}>
            <i className="fa-solid fa-caret-left fa-2xl arrow-login"></i>
          </Link>
        </div>
        <div className="info-log justify-content-center">
          <div className="row m-auto col-10">
            <h1 className="login-title text-center">Login</h1>
          </div>
          <div className="row d-flex  cont-email-login m-2">
            <div className="d-flex col-md-6 m-auto justify-content-center text-center">
              <i className=" fas fa-envelope fa-lg text-center fa-fw"></i>
              <div className=" form-outline flex-fill ">
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
          </div>
          <div className="row m-auto d-flex cont-email-password">
            <div className="d-flex col-md-6 m-auto justify-content-center">
              <i className="  fas fa-lock fa-lg  fa-fw"></i>
              <div className=" form-outline flex-fill ">
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
          </div>
          <div className="row justify-content-center pt-4">
            <button
              type="button "
              className="col-md-3 btn btn-outline-light"
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
