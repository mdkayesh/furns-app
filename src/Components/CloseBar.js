import React from "react";

const CloseBar = ({ dispatch }) => {
  return (
    <div className="close-bar" onClick={() => dispatch()}>
      <div></div>
      <div></div>
    </div>
  );
};

export default CloseBar;
