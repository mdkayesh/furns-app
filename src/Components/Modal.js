import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import CloseBar from "./CloseBar";
import { UseProductContext } from "./Context/ProductsContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Navigation } from "swiper";

const Modal = () => {
  const {
    modal,
    closeModal,
    addToCart,
    modalProduct,
    addToWish,
    isWishAdded,
    modalInc,
    modalDec,
    animated,
    unAnimated,
  } = UseProductContext();

  return (
    <>
      <div className="modal-container">
        <div
          className={modal ? "modal show" : "modal"}
          onClick={(event) => {
            if (event.target.classList.contains("modal")) {
              closeModal();
            } else {
              return null;
            }
          }}
        >
          <div className={modal ? "ht-modal show" : "container ht-modal"}>
            <button className="close-btn">
              <CloseBar dispatch={closeModal} />
            </button>
            {modalProduct.map((item) => {
              return (
                <div className="modal-body" key={item.id}>
                  <div className="row gap-1">
                    <div className="col-12 col-md-6">
                      <div className="product-slider">
                        <Swiper
                          modules={[Navigation]}
                          slidesPerView={1}
                          navigation
                          pagination={{ clickable: true }}
                          scrollbar={{ draggable: true }}
                        >
                          {item.imageUrls.map((img, index) => (
                            <SwiperSlide key={index}>
                              <div className="img">
                                <img src={img} alt="products" />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="modal-content">
                        <p>
                          <strong>SKU:</strong>GXW
                        </p>
                        <p>
                          <strong>Availability:</strong> {item.stock} in Stock
                        </p>
                        <h2>{item.name}</h2>
                        <div className="prize">
                          {item.oldPrize && <del>${item.oldPrize}</del>}
                          {item.prize && <span>${item.prize}</span>}
                        </div>
                        <p>{item.description}</p>
                        <div className="product-buttons">
                          <div className="counter-cart">
                            <div className="product-counter">
                              <button
                                className="btn decrement"
                                onClick={() => modalDec(item.id)}
                              >
                                <AiOutlineMinus />
                              </button>
                              <input
                                type="text"
                                name="text"
                                id="text"
                                min={1}
                                value={item.amount}
                                size="9"
                                max={9}
                                readOnly
                              />
                              <button
                                className="btn increment"
                                onClick={() => modalInc(item.id)}
                              >
                                <AiOutlinePlus />
                              </button>
                            </div>
                            <button
                              type="button"
                              className="button-basic orange"
                              onClick={() => {
                                addToCart(
                                  item.id,
                                  item.name,
                                  item.imageUrls,
                                  item.prize,
                                  item.stock
                                );
                                animated();

                                setTimeout(() => {
                                  unAnimated();
                                }, 1000);
                              }}
                            >
                              {item.isCartAdded
                                ? "Already Added"
                                : "add to cart"}
                            </button>
                          </div>
                          <div className="wish-compare">
                            <button
                              type="button"
                              onClick={() =>
                                addToWish(
                                  item.id,
                                  item.name,
                                  item.imageUrls,
                                  item.prize,
                                  item.stock
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
              );
            })}
          </div>
        </div>
        <div className={modal ? "fade show" : "fade"}></div>
      </div>
    </>
  );
};

export default Modal;
