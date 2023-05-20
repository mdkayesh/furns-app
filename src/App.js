import AsideNav from "./Components/Aside/AsideNav";
import AsideSearch from "./Components/Aside/AsideSearch";
import AsideSetting from "./Components/Aside/AsideSetting";
import BottomNav from "./Components/BottomNav";
import CartButton from "./Components/CartButton";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import "./style/sass/style.scss";
import Collection from "./Components/Pages/Collection";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Modal from "./Components/Modal";
import Contact from "./Components/Pages/Contact";
import Error from "./Components/Pages/Error";
import AsideCart from "./Components/Aside/AsideCart";
import CartPage from "./Components/Pages/CartPage";
import { useEffect } from "react";
import Product from "./Components/Pages/Product";
import Signin from "./Components/Pages/Signin";
import WishList from "./Components/Pages/WishList";
import { UseProductContext } from "./Components/Context/ProductsContext";
import { AnimatePresence } from "framer-motion";
import AdminPanel from "./Components/Pages/AdminPanel";

function App() {
  const { pathname } = useLocation();
  const { overflow } = UseProductContext();

  document.body.style.overflow = overflow ? "hidden" : "auto";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence>
      <div className="App">
        <Header />
        <AsideNav />
        <AsideSearch />
        <AsideSetting />
        <AsideCart />
        <CartButton />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="collection/:category" element={<Collection />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="signin" element={<Signin />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="*" element={<Error />} />
            <Route path="admin-panel" element={<AdminPanel />} />
          </Routes>
        </main>
        <BottomNav />
        <Footer />
        <Modal />
      </div>
    </AnimatePresence>
  );
}

export default App;
