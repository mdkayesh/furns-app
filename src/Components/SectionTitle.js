import React from "react";

const SectionTitle = ({ heading, text }) => {
  return (
    <div className="container">
      <div className="row justify-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h2>{heading}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
