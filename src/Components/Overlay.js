import React from "react";

const Overlay = ({ state, dispatch }) => {
  return (
    <div
      className={state ? "overlay show" : "overlay"}
      onClick={() => dispatch()}
    ></div>
  );
};

export default Overlay;
