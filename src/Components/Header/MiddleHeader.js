import React, { useEffect, useRef, useState } from "react";
import { logo } from "../images/img";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { UseAsideContext } from "../Context/AsideContext";
import { Link } from "react-router-dom";
import { UseProductContext } from "../Context/ProductsContext";

const MiddleHeader = () => {
  const [show, setshow] = useState(false);
  const { asideSearchFunc, asideCartFunc } = UseAsideContext();
  const { cartProducts } = UseProductContext();

  const menu = useRef();

  const handleClick = (event) => {
    if (!menu.current.contains(event.target)) {
      setshow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="middle-header">
      <div className="container">
        <div className="row align-center">
          <div className="col-6">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="middle-right">
              <div className="inner-middle">
                <div className="button">
                  <button type="button" onClick={asideSearchFunc}>
                    <IoSearchOutline />
                  </button>
                </div>
                <div className="button" ref={menu}>
                  <button type="button" onClick={() => setshow(!show)}>
                    <IoPersonOutline />
                  </button>
                  <ul className={show ? "menu show" : "menu"}>
                    <li className="menu-item">
                      <Link to="signin">Signin</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="cart">Cart</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="wishlist">Wishlist</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="compare">Compare</Link>
                    </li>
                  </ul>
                </div>
                <div className="button">
                  <button type="button" onClick={asideCartFunc}>
                    <BiShoppingBag />
                    <span>{cartProducts.length}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
