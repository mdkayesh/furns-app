import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { UseAsideContext } from "./Context/AsideContext";
import { UseProductContext } from "./Context/ProductsContext";

const CartButton = () => {
  const { asideCartFunc } = UseAsideContext();
  const { isAnimated, cartProducts } = UseProductContext();

  const totalPrize = cartProducts.reduce((prev, curVal) => {
    return prev + Number(curVal.prize) * curVal.amount;
  }, 0);

  return (
    <button
      className={isAnimated ? "cart-button animated" : "cart-button"}
      onClick={asideCartFunc}
    >
      <FiShoppingBag />
      <span className="item-counter">{cartProducts.length} items</span>
      <span className="usd">${totalPrize}</span>
    </button>
  );
};

export default CartButton;
