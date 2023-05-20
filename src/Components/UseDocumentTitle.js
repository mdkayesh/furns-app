import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseDocumentTitle = (title) => {
  const Location = useLocation();

  useEffect(() => {
    document.title = title + " :: furns - Furniture React eCommerce Tamplate";
  }, [Location.pathname, title]);
};

export default UseDocumentTitle;
