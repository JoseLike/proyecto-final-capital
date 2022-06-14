import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { RegisterType } from "/workspace/proyecto-final-capital/src/front/js/component/regUserSelection.jsx";
import logo2 from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
import profit from "/workspace/proyecto-final-capital/src/front/img/profit.png";
import solution from "/workspace/proyecto-final-capital/src/front/img/solution.png";
import "../../styles/register-styles.css";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const { store, actions } = useContext(Context);
  let navigate = useHistory();
  const [rptpassword, setRptpassword] = useState("form-control");

  const [notTouched, setnotTouched] = useState(
    "btt-account-type col-md-4 text-center shadow m-2 rounded"
  );
  const [notTouched2, setnotTouched2] = useState(
    "btt-account-type col-md-4 text-center shadow m-2 rounded"
  );
  const [classInputCompany, setclassInputCompany] = useState(
    "form-check-input mt-0 me-2 "
  );

  const [datos, setDatos] = useState({
    user_type: null,
    name: "",
    last_name: "",
    email: "",
    country: "",
    password: "",
    inversor_type: "",
    acepted_conditions: false,
    is_premium: false,
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

  const verify = () => {
    if (verify_email(datos.email) != true) {
      alert("El formato del email no es valido");
    }
    //if (verify_password(datos.password) != true) {
    //alert("Contraseña invalida");
    //}
  };

  const sendNewUser = async () => {
    //verify();
    if (datos.email != null && datos.password.trim() != "") {
      const response = await fetch(
        "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu46.gitpod.io/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos),
        }
      );
      const data = await response.json();
      console.log(data);
      navigate.push("./");
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
    if (repeat_password != password) {
      setRptpassword("form-control rptpasswordFalse");
    } else {
      setRptpassword("form-control rptpasswordTrue");
    }
    //
  };

  return (
    <div className="container-fluid base-register">
      <div className="contenido">
        <div className="row m-auto mt-2">
          <Link to="./">
            <img className="logo-register m-auto" src={logo2} alt="logo"></img>
          </Link>
        </div>
        {datos.user_type == null ? (
          <div className="account-type-box rounded justify-content-center m-5 p-4 ">
            <div className="d-flex text-center ">
              <div className="arrow-left-reg1">
                <Link to="./">
                  <i className="fa-solid fa-arrow-left arrow-left-reg1 icono-back col-1"></i>
                </Link>
              </div>
              <h1 className=" mx-auto titulo-selector-cuenta">
                Seleccione tipo de cuenta
              </h1>
            </div>
            <div className="d-flex justify-content-center mx-auto account-selection-box">
              <div
                className={notTouched}
                type="button"
                onMouseOver={() => {
                  setnotTouched(
                    "btt-account-type-over col-4 text-center m-2 rounded"
                  );
                }}
                onMouseOut={() => {
                  setnotTouched(
                    "btt-account-type col-4 text-center shadow m-2 rounded"
                  );
                }}
                onClick={() => {
                  setDatos({ ...datos, user_type: 2 });
                }}
              >
                <img
                  className=" img-fluid img-account-type fluid pt-2"
                  src={solution}
                  alt=""
                />
                <p>Emprendedor/Creador</p>
              </div>
              <div
                className={notTouched2}
                type="button"
                onMouseOver={() => {
                  setnotTouched2(
                    "btt-account-type-over col-4 text-center m-2 rounded"
                  );
                }}
                onMouseOut={() => {
                  setnotTouched2(
                    "btt-account-type col-4 text-center shadow m-2 rounded"
                  );
                }}
                onClick={() => {
                  setDatos({ ...datos, user_type: 3 });
                }}
              >
                <img className="img-account-type pt-2" src={profit} alt="" />
                <p>Inversor</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="row rw-main-box-register  justify-content-center pt-4 pb-5">
            <div className="col-8 main-box-register m-auto rounded p-3 ">
              <Link to="./">
                <i className="icono-atras fa-solid fa-arrow-left icono-back"></i>
              </Link>
              <div className="m-auto">
                <h1 className="register-title text-center">
                  Account Information
                </h1>
              </div>
              <div className="d-flex justify-content-center pt-4">
                <div className="d-flex ">
                  <input
                    className={classInputCompany}
                    type="checkbox"
                    checked={datos.company}
                    onChange={() => {
                      setDatos({ ...datos, inversor_type: "company" });
                    }}
                    aria-label="Checkbox for company"
                    name="company"
                  />
                  <p className="input-text-register me-3 align-middle">
                    Company
                  </p>
                </div>
                <div className="d-flex input-basic-register">
                  <input
                    className={
                      datos.company != true
                        ? "form-check-input mt-0 me-2"
                        : "form-check-input mt-0 me-2"
                    }
                    type="checkbox"
                    checked={datos.freelance}
                    onChange={() => {
                      setDatos({ ...datos, inversor_type: "freelance" });
                    }}
                    aria-label="Checkbox for following text input"
                  />
                  <p className="input-text-register me-3 text-center">
                    Freelance
                  </p>
                </div>
              </div>
              <div className="justify-content-center">
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Name
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    aria-label="Small"
                    onChange={handleInputChange}
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Last Name
                    </span>
                  </div>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    aria-label="Small"
                    onChange={handleInputChange}
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Email
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    aria-label="Small"
                    onChange={handleInputChange}
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Country
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    name="country"
                    id="inputGroupSelect01"
                    onChange={handleInputChange}
                  >
                    <option value>Choose your Region</option>
                    <option value="spain">Spain</option>
                    <option value="venezuela">Venezuela</option>
                    <option value="europe">Europe</option>
                    <option value="uk">U.K</option>
                    <option value="usa">U.S.A</option>
                  </select>
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Password
                    </span>
                  </div>
                  <input
                    type="text"
                    name="password"
                    className=" form-control"
                    aria-label="Small"
                    onChange={handleInputChange}
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Repeat Password
                    </span>
                  </div>
                  <input
                    type="text"
                    className={rptpassword}
                    aria-label="Small"
                    onChange={handlePasswordValidation}
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
                    className={
                      datos.acepted_conditions != true
                        ? "col-3 btn btn-outline-primary disabled"
                        : "col-3 btn btn-primary"
                    }
                    onClick={() => sendNewUser()}
                    aria-disabled="false"
                  >
                    Registrarse
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
