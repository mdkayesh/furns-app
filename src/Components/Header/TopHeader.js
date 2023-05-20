import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const TopHeader = () => {
  const [show, setshow] = useState({
    isEnglish: false,
    isUsd: false,
  });

  const menu = useRef(null);

  const isClickedEng = () => {
    setshow({
      isEnglish: !show.isEnglish,
      isUsd: false,
    });
  };
  const isClickedUsd = () => {
    setshow({
      isUsd: !show.isUsd,
      isEnglish: false,
    });
  };

  const handleClick = (event) => {
    if (!menu.current.contains(event.target)) {
      setshow({
        isEnglish: false,
        isUsd: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="massage">
              <p>Default Welcome Message</p>
            </div>
          </div>
          <div className="col-6">
            <div className="lang-currency" ref={menu}>
              <div className="lang">
                <button
                  type="button"
                  id="isEnglish"
                  className={show.isEnglish ? "active" : ""}
                  onClick={isClickedEng}
                >
                  English
                  {show.isEnglish ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                <ul className={show.isEnglish ? "menu show" : "menu"}>
                  <li className="menu-item">
                    <a href="/">English</a>
                  </li>
                  <li className="menu-item">
                    <a href="/">Italiano</a>
                  </li>
                  <li className="menu-item">
                    <a href="/">Français</a>
                  </li>
                  <li className="menu-item">
                    <a href="/">Filipino</a>
                  </li>
                </ul>
              </div>
              <div className="currency">
                <button
                  type="button"
                  id="isUsd"
                  className={show.isUsd ? "active" : ""}
                  onClick={isClickedUsd}
                >
                  Usd
                  {show.isUsd ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                <ul className={show.isUsd ? "menu show" : "menu"}>
                  <li className="menu-item">
                    <a href="/">$ - USD</a>
                  </li>
                  <li className="menu-item">
                    <a href="/">€ - EUR</a>
                  </li>
                  <li className="menu-item">
                    <a href="/">£ - POUND</a>
                  </li>
                  <li className="menu-item">
                    <a href="/">₣ - FRANC</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
