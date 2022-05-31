import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import logosimple from "/workspace/proyecto-final-capital/src/front/img/logosimple.png";
import { Projectcard } from "/workspace/proyecto-final-capital/src/front/js/component/projectscard.jsx";
import "../../styles/personalview.css";
import { EmprendedorLanding } from "/workspace/proyecto-final-capital/src/front/js/component/emprendedorlanding.jsx";
import { InvestorLanding } from "/workspace/proyecto-final-capital/src/front/js/component/investorlanding.jsx";

export const PersonalView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  //useEffect(() => {
  //actions.getUserProjects();
  //}, []);
  {
    if (store.current_user[0].user_type != 2) {
      return <InvestorLanding />;
    } else {
      return <EmprendedorLanding />;
    }
  }
};
