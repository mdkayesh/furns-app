import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AsideProvider } from "./Components/Context/AsideContext";
import { ProductProvider } from "./Components/Context/ProductsContext";
import { FilterProductProvider } from "./Components/Context/FilterProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProductProvider>
        <FilterProductProvider>
          <AsideProvider>
            <App />
          </AsideProvider>
        </FilterProductProvider>
      </ProductProvider>
    </React.StrictMode>
  </BrowserRouter>
);
