import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Counter = ({ amount, increment, decrement }) => {
  return (
    <div className="counter">
      <button type="button" onClick={decrement}>
        <FiMinus />
      </button>
      <span>{amount}</span>
      <button type="button" onClick={increment}>
        <FiPlus />
      </button>
    </div>
  );
};

export default Counter;
