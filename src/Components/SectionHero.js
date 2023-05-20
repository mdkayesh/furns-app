import React from "react";
import { Link } from "react-router-dom";

const SectionHero = ({ heading, pageName }) => {
  return (
    <div className="section-hero">
      <h2>{heading}</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pageName ? (
          <li>
            <Link to={"/collection/shop"}>{pageName}</Link>
          </li>
        ) : null}
        <li>{heading}</li>
      </ul>
    </div>
  );
};

export default SectionHero;
