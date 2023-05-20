import React from "react";
import { navData } from "../../Data/NavData";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { HomeDrop, OfficeDrop, HospitalDrop } from "./Dropdown";
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-nav">
            {navData.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink className="nav-link" to={item.url}>
                  {item.title}
                  {item.drop ? <FiChevronDown /> : null}
                </NavLink>
                {item.drop ? (
                  item.title.includes("home") ? (
                    <HomeDrop />
                  ) : item.title.includes("office") ? (
                    <OfficeDrop />
                  ) : item.title.includes("hospital") ? (
                    <HospitalDrop />
                  ) : null
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
