import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/inversorpay.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51L87AmKEz3UKYat7WBXzyxuvCGgjJFfcqxARPjYwWkrRxiOSsrZ6f3unPxYZpQyrTlI96NRF8DMe32MDMcwAglGV00WMMLBMNZ"
);

export const InversorPay = () => {
  return (
    <Elements stripe={stripePromise}>
      <InversorPayComponent />
    </Elements>
  );
};

export const InversorPayComponent = () => {
  const { store, actions } = useContext(Context);

  const [changedata, setChangedata] = useState({
    amount: 0,
  });

  const handleInputChange = (event) => {
    setChangedata({
      ...changedata,
      [event.target.name]: event.target.value,
    });
  };

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
      axios({
        url: "https://proyecto-final-investup.herokuapp.com/api/investment/",
        method: "POST",
        data: {
          id: paymentMethod.id,
          description: "Inversion",
          amount: changedata.amount,
        },
      });
      console.log(store.singleproject);
      await axios.put(
        "https://proyecto-final-investup.herokuapp.com/api/investor/" +
          store.singleproject.id,
        {
          raised_capital: changedata.amount,
        }
      );
    }
  };

  return (
    <div className="container mt-4 rounded shadow p-3">
      <div className="">
        <Link to={"/project/" + store.singleproject.id}>
          <i className="fa-solid btn-flotante-atras fa-arrow-left arrow-left-reg1 icono-back col-1 ms-4 fixed"></i>
        </Link>
      </div>
      <div className="container mt-2  rounded shadow p-3">
        <div className="title row">
          <h1 className="col text-center">Datos de Inversion</h1>
        </div>
        <div className="project-info row border-0 rounded mt-4">
          <div className="project-data col-8">
            <h1 className="nombre-proyecto text-center">
              {store.singleproject.title}
            </h1>
            <div className="ms-3">
              <div className="deadline mt-3 border-bottom">
                Fecha limite: {store.singleproject.deadline}
              </div>
              <div className="required-capital mt-3 border-bottom">
                Capital requerido: {store.singleproject.desired_capital}
              </div>
              <div className="raised-capital mt-3 mb-3 border-bottom">
                Capital obtenido: {store.singleproject.raised_capital}
              </div>
            </div>
          </div>
          <div className="project-photo col-4 mt-2 mb-2 ">
            <img
              className="shadow "
              src="https://images.ecestaticos.com/pqIAcGCEagnkjdIBVKVbC9i5FH4=/0x0:1920x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8e%2Fe27%2F2bf%2Fe8ee272bfd36f69679936351209d708c.jpg"
              alt="projectphoto"
            />
          </div>
        </div>

        <div className="pay-info row d-flex flex-column align-items-center mt-5">
          <h3 className="col text-center">Inversión</h3>
          <div className="col-6 mt-2">
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text inp-capital-span"
                  id="inputGroup-sizing-sm"
                >
                  Capital a Invertir (€)
                </span>
              </div>
              <input
                type="number"
                name="amount"
                className="form-control text-center"
                aria-label="Small"
                onChange={handleInputChange}
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="col-8 border-0 rounded mt-5">
            <h3 className="text-center mt-2">Datos de pago</h3>
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
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            type="button"
            className="col-2 btn btn-pay btn-success shadow"
            aria-disabled="false"
            onClick={paymentSubmit}
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};
