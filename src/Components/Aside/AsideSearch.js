import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import CloseBar from "../CloseBar";
import { UseAsideContext } from "../Context/AsideContext";
import Overlay from "../Overlay";

const AsideSearch = () => {
  const { asideSearch, asideSearchFunc } = UseAsideContext();

  return (
    <aside className={asideSearch ? "aside-search open" : "aside-search"}>
      <div className="inner-search">
        <div className="form-wrap">
          <form>
            <input
              className="search"
              type="search"
              name="search"
              id="search"
              placeholder="Enter your search keyword..."
            />
            <button type="submit">
              <IoSearchOutline />
            </button>
          </form>
        </div>
        <div className="search-items">
          <h4>Popular Searches:</h4>
          <ul>
            <li>
              <a href="/">bed</a>
            </li>
            <li>
              <a href="/">chair</a>
            </li>
          </ul>
        </div>
        <CloseBar dispatch={asideSearchFunc} />
      </div>
      <Overlay state={asideSearch} dispatch={asideSearchFunc} />
    </aside>
  );
};

export default AsideSearch;
