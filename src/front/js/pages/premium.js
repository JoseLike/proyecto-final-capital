import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/premium.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import getState from "/workspace/proyecto-final-capital/src/front/js/store/flux.js";
import { object } from "prop-types";

const stripePromise = loadStripe(
  "pk_test_51L87AmKEz3UKYat7WBXzyxuvCGgjJFfcqxARPjYwWkrRxiOSsrZ6f3unPxYZpQyrTlI96NRF8DMe32MDMcwAglGV00WMMLBMNZ"
);

export const Premium = () => {
  return (
    <Elements stripe={stripePromise}>
      <PremiumComponent />
    </Elements>
  );
};

export const PremiumComponent = () => {
  const { store, actions } = useContext(Context);

  //useEffect(() => {
  //actions.getSingleProject(theid);
  //}, []);

  const [changedata, setChangedata] = useState({
    amount: 20,
  });

  const stripe = useStripe();
  const element = useElements();

  const paymentSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      await axios({
        url: "https://3001-joselike-proyectofinalc-9x2yno4h1l3.ws-eu47.gitpod.io/api/investment/",
        method: "POST",
        data: {
          id: paymentMethod.id,
          description: "Inversion",
          amount: changedata.amount,
        },
      });
      /* console.log(object); TRAER USUARIOOOOOOO */
      await fetch(
        "https://3001-joselike-proyectofinalc-9x2yno4h1l3.ws-eu47.gitpod.io/api/paypremium",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
        console.log(store.current_user)
      );
    }
  };

  return (
    <div className="d-flex premium-page pb-4">
      <Link to={"/personal"}>
        <i className="fa-solid btn-flotante-atras fa-arrow-left arrow-left-reg1 icono-back col-1 ms-4 fixed"></i>
      </Link>
      <div className="container mt-4 rounded shadow p-3 ">
        <div className="row d-flex flex-md-wrap ">
          <div className="divizq col-md-5 border-none rounded m-2 pb-4 shadow">
            <h1 className="text-center m-2 border rounded p-2 free-title">
              Free User
            </h1>
            <h4 className="text-center m-4">Emprendedor</h4>
            <div className="d-flex lst">
              <div className="li-izq">Máximo proyectos publicados</div>
              <div className="text-end li-dcha pe-5">5</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">
                Maximo de visitas diarias a tus proyectos
              </div>
              <div className="text-end li-dcha pe-5">50</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Capital Maximo del proyecto</div>
              <div className="text-end li-dcha pe-5">3000€</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Destacar tus proyectos</div>
              <div className="text-end li-dcha pe-5">NO</div>
            </div>

            <h4 className="mt-4 text-center">Inversor</h4>
            <div className="d-flex lst">
              <div className="li-izq">
                Visualizar proyectos recien publicados
              </div>
              <div className="text-end li-dcha pe-5">NO</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Maximo de proyectos vistos</div>
              <div className="text-end li-dcha pe-5">10</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Ver proyectos destacados</div>
              <div className="text-end li-dcha pe-5">NO</div>
            </div>
            <div
              className="col-5 mx-auto rounded btn-free mt-5 btn-light shadow text-center p-2"
              aria-disabled="false"
            >
              0€/Mes
            </div>
          </div>
          <div className="divdcha col-md-6 border-none rounded m-2 pb-4 shadow">
            <h1 className="text-center premium-title border rounded p-2 m-2">
              Premium User
            </h1>
            <h4 className="text-center m-4">Emprendedor</h4>
            <div className="d-flex lst">
              <div className="li-izq">Máximo proyectos publicados</div>
              <div className="text-end li-dcha pe-5">Ilimitados</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">
                Maximo de visitas diarias a tus proyectos
              </div>
              <div className="text-end li-dcha pe-5">Sin Limites</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Capital Maximo del proyecto</div>
              <div className="text-end li-dcha pe-5">Sin Limites</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Destacar tus proyectos</div>
              <div className="text-end li-dcha pe-5">SI</div>
            </div>

            <h4 className="mt-5 text-center">Inversor</h4>
            <div className="d-flex lst">
              <div className="li-izq">
                Visualizar proyectos recien publicados
              </div>
              <div className="text-end li-dcha pe-5">SI</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Maximo de proyectos vistos</div>
              <div className="text-end li-dcha pe-5">Ilimitados</div>
            </div>
            <div className="d-flex lst">
              <div className="li-izq">Ver proyectos destacados</div>
              <div className="text-end li-dcha pe-5">SI</div>
            </div>
            <br />
            <div className="margin-card">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
            <div className="d-flex justify-content-around">
              <div
                className="  btn-premium rounded mt-5 btn-success shadow p-3"
                aria-disabled="false"
              >
                20€/Mes
              </div>
              <button
                type="button"
                className=" btn btn-pay mt-5 btn-success shadow p-3"
                aria-disabled="false"
                onClick={paymentSubmit}
              >
                Hacerme Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
