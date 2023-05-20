import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navigation from "./Navigation";
import MoblieNav from "./MoblieNav";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <MiddleHeader />
      <MoblieNav />
      <Navigation />
    </header>
  );
};

export default Header;
