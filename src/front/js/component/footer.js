import React, { Component } from "react";
import logo2 from "../../img/logo2";
import "../../styles/home.css";
import logosimple from "../../img/logo";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <div className="container-fluid footer-contain">
      <footer className="d-flex flex-wrap justify-content-between align-items-center  ">
        <ul className="nav col-4 d-flex justify-content-center">
          <li className="ms-3">
            <a className="text-muted i-rrss" href="#">
              <span className="i-rrss ">
                <i className="fa-brands fa-2xl fa-twitter-square"></i>
              </span>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <span className="i-rrss ">
                <i className="fa-brands fa-2xl fa-linkedin"></i>
              </span>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <span className="i-rrss ">
                <i className="fa-brands fa-2xl fa-facebook-square"></i>
              </span>
            </a>
          </li>
        </ul>
        <img src={logosimple} className="col-md-4 mb-0 logo-footer" />
        <ul className="nav col-md-4 align-items-center justify-content-center">
          <li className="nav-item">
            <span className="footer-info texto-footer">
              <div className="nav-link px-2 text-muted ">Home</div>
            </span>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Join Us
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
