import React from "react";
import "/workspace/proyecto-final-capital/src/front/styles/home.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList mx-auto">
        {SidebarData.map((val) => {
          return (
            <div>
              <li key={val.id} className="row container">
                <div className="d-flex">
                  <div className="icon">{val.icon}</div>
                  <div className="title">{val.title}</div>
                </div>
                <br />
                <div className="subtitles">
                  <ul>
                    {val.subtitle.map((item) => {
                      return (
                        <li key={item.id} className="cortos">
                          <Link to={item.path}>
                            <p className="text-secondary">{item.name}</p>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <button className="cuadroPremium btn btn-light">
        <h4>HAZTE PREMIUM</h4>
      </button>
    </div>
  );
};
