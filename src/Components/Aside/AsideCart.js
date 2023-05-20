import React from "react";
import { Link } from "react-router-dom";
import CloseBar from "../CloseBar";
import { UseAsideContext } from "../Context/AsideContext";
import Overlay from "../Overlay";

import { HiXMark } from "react-icons/hi2";
import { UseProductContext } from "../Context/ProductsContext";
import NoProduct from "../NoProduct";
import Counter from "../Counter";

const AsideCart = () => {
  const { asideCart, asideCartFunc } = UseAsideContext();
  const { removeItem, increment, decrement, cartProducts } =
    UseProductContext();

  // const _cartProducts = JSON.parse(localStorage.getItem("cart"));

  const totalPrize = cartProducts.reduce((prev, curVal) => {
    return prev + Number(curVal.prize) * curVal.amount;
  }, 0.0);

  return (
    <aside className={asideCart ? "aside-cart show" : "aside-cart"}>
      <div className="inner-cart">
        <div className="cart-top">
          <h2>cart</h2>
          <CloseBar dispatch={asideCartFunc} />
        </div>
        <div className="cart-item">
          <div className="inner-item">
            {cartProducts.map((item) => (
              <div className="product-item" key={item.id}>
                <figure>
                  <Link>
                    <img src={item.img} alt="product" />
                  </Link>
                </figure>
                <div className="product-info">
                  <Link to={`/product/${item.info}`}>
                    {item.info.length > 20
                      ? `${item.info.slice(0, 20)}...`
                      : item.info}
                  </Link>
                  <p>
                    {item.amount} * <span>${item.prize}</span>
                  </p>
                  <Counter
                    amount={item.amount}
                    increment={() => increment(item.id)}
                    decrement={() => decrement(item.id)}
                  />
                </div>
                <button
                  className="cross"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  <HiXMark />
                </button>
              </div>
            ))}
            {cartProducts.length === 0 ? <NoProduct /> : null}
          </div>
        </div>
        <div className="cart-view">
          <Link to={"cart"}>
            view cart
            <span>${totalPrize}</span>
          </Link>
        </div>
      </div>
      <Overlay state={asideCart} dispatch={asideCartFunc} />
    </aside>
  );
};

export default AsideCart;
