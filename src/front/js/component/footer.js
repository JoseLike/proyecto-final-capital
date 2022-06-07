import React, { Component } from "react";
import logo2 from "/workspace/proyecto-final-capital/src/front/img/logo2.png";
import "/workspace/proyecto-final-capital/src/front/styles/home.css";
import logosimple from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";

export const Footer = () => {
  return (
    <div className="container footer-contain fixed-bottom">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer-design">
        <ul className="nav col-md-4 d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-twitter-square"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-linkedin"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-2xl fa-facebook-square"></i>
            </a>
          </li>
        </ul>
        <img src={logosimple} className="col-md-4 mb-0 logo-footer" />
        <ul className="nav col-md-4 align-items-center justify-content-center">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
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
