import React from "react";
import { useParams } from "react-router-dom";
import { UseFilterProvider } from "../Context/FilterProductContext";
import ProductItem from "../ProductItem";
import SectionHero from "../SectionHero";
import NoProduct from "../NoProduct";
import UseDocumentTitle from "../UseDocumentTitle";

const Collection = () => {
  const { category } = useParams();
  const { filterProducts, sortBy } = UseFilterProvider();

  const getCategoryProducts = () => {
    let products = [];

    filterProducts.map((item) => {
      if (item.category.toLowerCase().includes(category.split("-").join(" "))) {
        products.push(item);
      } else if (category === "shop") {
        products = [...filterProducts];
      }
      return undefined;
    });
    return products;
  };

  let capitalizeCategory = category.charAt(0).toUpperCase() + category.slice(1);

  category === "shop"
    ? UseDocumentTitle("Products")
    : UseDocumentTitle(capitalizeCategory + " Products");

  return (
    <section id="collection" className="collection" style={{ padding: 0 }}>
      {category === "shop" ? (
        <SectionHero pageName={"collection"} heading={"Products"} />
      ) : (
        <SectionHero pageName={"collection"} heading={category} />
      )}

      <div className="container">
        <div className="sorting-area">
          <div className="row align-center">
            <div className="col-12 col-sm-6">
              <div className="products-counter">
                <p>Showing {getCategoryProducts().length} products</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="sort">
                <label htmlFor="sort">Sort by</label>
                <select
                  name="sort"
                  id="sort"
                  onClick={(event) => sortBy(event)}
                >
                  <option value="relevance">Relevance</option>
                  <option value="#" disabled></option>
                  <option value="A-Z">Name(A-Z)</option>
                  <option value="#" disabled></option>
                  <option value="Z-A">Name(Z-A)</option>
                  <option value="#" disabled></option>
                  <option value="low-high">Prize(Low-High)</option>
                  <option value="#" disabled></option>
                  <option value="high-low">Prize(High-Low)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-products">
        <div className="container">
          <div className="row gap-1">
            {getCategoryProducts().map((item) => (
              <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                <ProductItem {...item} />
              </div>
            ))}
          </div>
          {getCategoryProducts().length === 0 && <NoProduct />}
        </div>
      </div>
    </section>
  );
};

export default Collection;
