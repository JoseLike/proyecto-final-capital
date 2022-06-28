import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import logosimple from "../../img/logosimple.png";
import { Projectcard } from "../component/projectscard.jsx";
import "../../styles/personalview.css";
import { EmprendedorLanding } from "../component/emprendedorlanding.jsx";
import { InvestorLanding } from "../component//investorlanding.jsx";

export const PersonalView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getUserProjects();
  }, []);
  {
    if (store.current_user.user_type != 2) {
      return <InvestorLanding />;
    } else {
      return <EmprendedorLanding />;
    }
  }
};
