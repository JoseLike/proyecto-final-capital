import React from "react";
import "/workspace/proyecto-final-capital/src/front/styles/home.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {SidebarData.map((val) => {
          return (
            <Link to={val.link} key={val.id}>
              <li className="row">
                <div id="icon">{val.icon}</div>
                <div id="title"> {val.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="cuadroPremium"></div>
    </div>
  );
};
