import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import "/workspace/proyecto-final-capital/src/front/styles/home.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <i class="fas fa-bars" onClick={showSidebar}></i>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i class="fas fa-times"></i>
            </Link>
          </li>
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
      </nav>
    </div>
  );
};

export default Navbar;
