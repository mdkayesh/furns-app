import React, { useEffect } from "react";
import SectionHero from "../SectionHero";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

import { UseProductContext } from "../Context/ProductsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// import css files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Data/firebase";

const Product = () => {
  const {
    addToCart,
    singleInc,
    singleDec,
    singleProduct,
    addToWish,
    isWishAdded,
    addToSinglePro,
    // isCartAdded,
  } = UseProductContext();

  const { id } = useParams();

  // const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "products", id);

    (async () => {
      const res = await getDoc(docRef);

      addToSinglePro({ ...res.data(), id: res.id, amount: 1 });
    })();

    return () => null;
  }, [id]);

  console.log(singleProduct);

  return singleProduct.length === 0 ? (
    <div className="loading">
      <div className="loading-spin"></div>
      <h2>Loading</h2>
    </div>
  ) : (
    singleProduct?.map((item) => (
      <div key={item?.id}>
        <SectionHero heading={item?.name} pageName={"products"} />
        <section className="single-product">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {item?.imageUrls.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="img">
                        <img src={img} alt="products" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-12 col-md-6">
                <div className="modal-content">
                  <p>
                    <strong>SKU:</strong>GXW
                  </p>
                  <p>
                    <strong>Availability:</strong> {item?.stock} in Stock
                  </p>
                  <h2>{item?.name}</h2>
                  <div className="prize">
                    {item?.oldPrize && <del>${item?.oldPrize}</del>}
                    {item?.prize && <span>${item?.prize}</span>}
                  </div>
                  <p>{item?.description}</p>
                  <div className="product-buttons">
                    <div className="counter-cart">
                      <div className="product-counter">
                        <button
                          className="btn decrement"
                          onClick={() => singleDec(item?.id)}
                        >
                          <AiOutlineMinus />
                        </button>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          min={1}
                          value={item?.amount}
                          size="9"
                          max={9}
                          readOnly
                        />
                        <button
                          className="btn increment"
                          onClick={() => singleInc(item?.id)}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="button-basic orange"
                        onClick={() =>
                          addToCart(
                            item?.id,
                            item?.name,
                            item?.imageUrls,
                            item?.prize,
                            item?.oldPrize,
                            item?.stock
                          )
                        }
                      >
                        {item?.isCartAdded ? "Already Added" : "add to cart"}
                      </button>
                    </div>
                    <div className="wish-compare">
                      <button
                        type="button"
                        onClick={() =>
                          addToWish(
                            item?.id,
                            item?.name,
                            item?.imageUrls,
                            item?.prize,
                            item?.stock
                          )
                        }
                      >
                        <AiOutlineHeart />
                        {isWishAdded
                          ? "remove from wishlist"
                          : "add to wishlist"}
                      </button>
                      <button type="button">
                        <IoIosGitCompare />
                        remove from the cart
                      </button>
                    </div>
                  </div>
                  <div className="social">
                    <strong>share:</strong>
                    <div className="media">
                      <a href="/">
                        <BsFacebook />
                      </a>
                      <a href="/">
                        <BsTwitter />
                      </a>
                      <a href="/">
                        <BsLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ))
  );
};

export default Product;
