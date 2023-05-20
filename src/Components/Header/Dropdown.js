import React from "react";
import { Link } from "react-router-dom";
import {
  homeDropData,
  HospitalDropData,
  officeDropData,
} from "../../Data/NavData";
import { UseAsideContext } from "../Context/AsideContext";

export const HomeDrop = ({ open }) => {
  const { asideNavCloseFunc } = UseAsideContext();

  return (
    <div className="dropdown">
      <ul className={open ? "open" : ""}>
        {homeDropData.map((item, index) => (
          <li key={index}>
            <Link to={item.url} onClick={asideNavCloseFunc}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const OfficeDrop = ({ open }) => {
  const { asideNavCloseFunc } = UseAsideContext();

  return (
    <div className="dropdown">
      <ul className={open ? "open" : ""}>
        {officeDropData.map((item, index) => (
          <li key={index}>
            <Link to={item.url} onClick={asideNavCloseFunc}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const HospitalDrop = ({ open }) => {
  const { asideNavCloseFunc } = UseAsideContext();

  return (
    <div className="dropdown">
      <ul className={open ? "open" : ""}>
        {HospitalDropData.map((item, index) => (
          <li key={index}>
            <Link to={item.url} onClick={asideNavCloseFunc}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
