// using context for state

import React from "react";

//  using icons
import {
  IoSettingsOutline,
  IoSearchOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { logo } from "../images/img";
import { UseAsideContext } from "../Context/AsideContext";

const MoblieNav = () => {
  const { asideNavFunc, asideSearchFunc, asideSettingFunc } = UseAsideContext();

  return (
    <div className="mobile-nav">
      <div className="container">
        <div className="row align-center">
          <div className="col-4">
            <div className="menubar" onClick={asideNavFunc}>
              <IoMenuOutline />
            </div>
          </div>
          <div className="col-4">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="settings">
              <div className="button">
                <button
                  className="search"
                  type="button"
                  onClick={asideSearchFunc}
                >
                  <IoSearchOutline />
                </button>
              </div>
              <div className="button">
                <button
                  type="button"
                  className="setting"
                  onClick={asideSettingFunc}
                >
                  <IoSettingsOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoblieNav;
