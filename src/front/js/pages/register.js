import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { RegisterType } from "/workspace/proyecto-final-capital/src/front/js/component/regUserSelection.jsx";
import logo2 from "/workspace/proyecto-final-capital/src/front/img/logo2.png";
import "../../styles/register-styles.css";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const { store, actions } = useContext(Context);
  let navigate = useHistory();

  const [buttondisabled, setbuttondisabled] = useState(
    "col-3 btn btn-outline-success disabled"
  );

  const [datos, setDatos] = useState({
    user_type: "",
    name: "",
    last_name: "",
    email: "",
    country: "",
    password: "",
    company: false,
    freelance: false,
    category: "",
    acepted_conditions: false,
    is_premium: false,
  });

  const verify_email = (email) => {
    let regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  };

  const verify_password = (password) => {
    let exregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;
    return exregex.test(password) ? true : false;
  };

  const verify = () => {
    if (verify_email(datos.email) != true) {
      alert("El formato del email no es valido");
    }
    if (verify_password(datos.password) != true) {
      alert("Contraseña invalida");
    }
  };
  const sendUserInfo = async () => {
    if (datos.email != null && datos.password.trim() != "") {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      const data = await response.json();
      localStorage.setItem("token", data.token);
      if (data.logged == true) {
        actions.logTrue();
      }
      console.log(data);
      //navigate.push("/home");
    } else {
      return alert("Falta informacion");
    }
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handlePasswordValidation = (event) => {
    let repeat_password = event.target.value;
    let password = datos.password;
    if (repeat_password != password);
    //
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
      <div className="row rw-main-box  justify-content-center">
        <div className="col-8 main-box m-auto rounded ">
          <Link to="./">
            <i className="fa-solid fa-arrow-left icono-back"></i>
          </Link>
          <div className="m-auto">
            <h1 className="register-title text-center">Account Information</h1>
          </div>
          <div className="d-flex justify-content-center pt-4">
            <div className="d-flex ">
              <input
                className="form-check-input mt-0 me-2"
                type="checkbox"
                checked={datos.company}
                onChange={() => {
                  setDatos({ ...datos, company: !datos.company });
                }}
                aria-label="Checkbox for company"
                name="company"
              />
              <p className="input-text-register me-3 align-middle">Company</p>
            </div>
            <div className="d-flex input-basic-register">
              <input
                className="form-check-input mt-0 me-2"
                type="checkbox"
                checked={datos.freelance}
                onChange={() => {
                  setDatos({ ...datos, freelance: !datos.freelance });
                }}
                aria-label="Checkbox for following text input"
              />
              <p className="input-text-register me-3 text-center">Freelance</p>
            </div>
          </div>
          <div className="justify-content-center">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Name
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Small"
                onChange={handleInputChange}
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Last Name
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Small"
                onChange={handleInputChange}
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Email
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Small"
                onChange={handleInputChange}
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Country
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Small"
                onChange={handleInputChange}
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Password
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Small"
                onChange={handleInputChange}
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Repeat Password
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Small"
                onChange={handleInputChange}
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="d-flex justify-content-center input-basic-register mt-4">
              <input
                className="form-check-input mt-0 me-2"
                type="checkbox"
                checked={datos.acepted_conditions}
                onChange={() => {
                  setDatos({
                    ...datos,
                    acepted_conditions: !datos.acepted_conditions,
                  });
                }}
                aria-label="Checkbox for following text input"
              />
              <p className="input-text-register me-3 ">
                Acepto los terminos y condiciones de la pagina
              </p>
            </div>
            <div className="row justify-content-center">
              <a
                type="button"
                className={buttondisabled}
                onClick={() => verify()}
                aria-disabled="false"
              >
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
