import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import "/workspace/proyecto-final-capital/src/front/styles/home.css";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar"></div>
      <ul>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
