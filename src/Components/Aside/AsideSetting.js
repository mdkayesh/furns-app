import React from "react";
import Overlay from "../Overlay";
import { logo } from "../images/img";
import { Link } from "react-router-dom";
import CloseBar from "../CloseBar";
import { BsHeadset, BsSuitHeartFill } from "react-icons/bs";
import { UseAsideContext } from "../Context/AsideContext";

const AsideSetting = () => {
  const { asideSetting, asideSettingFunc } = UseAsideContext();

  return (
    <aside className={asideSetting ? "aside-setting open" : "aside-setting"}>
      <div className="inner-setting">
        <div className="setting-top">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <CloseBar dispatch={asideSettingFunc} />
        </div>
        <div className="select">
          <div className="select-item">
            <label htmlFor="language">Language</label>
            <select name="language" id="language">
              <option value="Dutch">Dutch</option>
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
              <option value="Bangali">Bangali</option>
              <option value="Italian">Italian</option>
            </select>
          </div>
          <div className="select-item">
            <label htmlFor="Currency">Currency</label>
            <select name="Currency" id="Currency">
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
              <option value="EURO">EURO</option>
              <option value="OMR">OMR</option>
            </select>
          </div>
        </div>
        <div className="contact">
          <div className="number">
            <p>
              <span>
                <BsHeadset />
              </span>
              <a href="tel:+882836272324">+882836272324</a>
            </p>
          </div>
          <div className="copyright">
            <p>
              © 2021, Furns. Made With
              <span>
                <BsSuitHeartFill />
              </span>
              by HasThemes.
            </p>
          </div>
        </div>
      </div>
      <Overlay state={asideSetting} dispatch={asideSettingFunc} />
    </aside>
  );
};

export default AsideSetting;
