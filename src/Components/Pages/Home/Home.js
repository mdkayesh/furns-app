import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { ad1, ad2, slider1, slider2 } from "../../images/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// sliderTwo images

import {
  sliderTwo1,
  sliderTwo2,
  sliderTwo3,
  sliderTwo4,
  sliderTwo5,
} from "../../images/img";

// import css files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../Button";
import SectionTitle from "../../SectionTitle";
import { newsData } from "../../../Data/NewsData";
import ProductItem from "../../ProductItem";
import UseDocumentTitle from "../../UseDocumentTitle";
import { UseProductContext } from "../../Context/ProductsContext";
import { motion, AnimatePresence } from "framer-motion";
import { container, fadeUp, tabItemVariant } from "../../Animation/Animation";

const initialValues = {
  newArrival: true,
  featured: false,
  onSale: false,
  trending: false,
  modal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "newArrival":
      return {
        ...state,
        newArrival: true,
        onSale: false,
        trending: false,
        featured: false,
      };
    case "featured":
      return {
        ...state,
        featured: true,
        onSale: false,
        trending: false,
        newArrival: false,
      };

    case "onSale":
      return {
        ...state,
        newArrival: false,
        featured: false,
        onSale: true,
        trending: false,
      };
    case "trending":
      return {
        ...state,
        newArrival: false,
        featured: false,
        onSale: false,
        trending: true,
      };
    case "modal":
      return { ...state, modal: true };
    case "fade":
      return { ...state, modal: false };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatchOne] = useReducer(reducer, initialValues);

  const { Products } = UseProductContext();

  UseDocumentTitle("Home");

  return (
    <>
      <div className="slider">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="container"
                    variants={container}
                    initial={"hidden"}
                    animate={"visible"}
                    exit={{
                      x: "-100vw",
                      transition: {
                        duration: 0.5,
                      },
                    }}
                  >
                    <div className="slider-item">
                      <div className="row">
                        <div className="col-md-7 col-12 d-flex align-center">
                          <div className="content">
                            <motion.h4 variants={fadeUp}>
                              New Products
                            </motion.h4>
                            <motion.h2 variants={fadeUp}>
                              Flexible Chair
                            </motion.h2>
                            <motion.p variants={fadeUp}>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Tempore soluta ut maiores neque quisquam
                              eaque, dicta fugit amet cum autem.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                              <Button type={"orange"} url={"collection/shop"}>
                                Shop Now
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                        <div className="col-md-5 col-12 d-flex align-center">
                          <motion.div
                            className="img"
                            initial={{ y: 300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                          >
                            <img src={slider1} alt="chair" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    className="container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    exit={{
                      x: "100vw",
                      transition: {
                        duration: 0.5,
                      },
                    }}
                  >
                    <div className="slider-item">
                      <div className="row">
                        <div className="col-md-7 col-12 d-flex align-center">
                          <div className="content">
                            <motion.h4 variants={fadeUp}>Best Seller</motion.h4>
                            <motion.h2 variants={fadeUp}>
                              Creative Sofa
                            </motion.h2>
                            <motion.p variants={fadeUp}>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Tempore soluta ut maiores neque quisquam
                              eaque, dicta fugit amet cum autem.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                              <Button type={"orange"} url={"collection/shop"}>
                                Shop Now
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                        <div className="col-md-5 col-12 d-flex align-center">
                          <motion.div
                            className="img"
                            initial={{ y: 300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                          >
                            <img src={slider2} alt="chair" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="furniture-slider">
        <div className="container">
          <Swiper
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <Link to="collection/living" className="item">
                <div className="img">
                  <img src={sliderTwo1} alt="furniture" />
                </div>
                <h4>Living</h4>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="collection/office-chair" className="item">
                <div className="img">
                  <img src={sliderTwo2} alt="furniture" />
                </div>
                <h4>Office Chair</h4>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="collection/bedroom" className="item">
                <div className="img">
                  <img src={sliderTwo3} alt="furniture" />
                </div>
                <h4>Bedroom</h4>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="collection/dining" className="item">
                <div className="img">
                  <img src={sliderTwo4} alt="furniture" />
                </div>
                <h4>Dining</h4>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="collection/lounge" className="item">
                <div className="img">
                  <img src={sliderTwo5} alt="furniture" />
                </div>
                <h4>Lounge</h4>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* section products */}

      <section className="products">
        <SectionTitle
          heading={"Our Products"}
          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore`}
        />
        <div className="container">
          <div className="row justify-center">
            <div className="products-nav">
              <ul>
                <li
                  className={state.newArrival ? "clicked" : ""}
                  onClick={() => {
                    dispatchOne({ type: "newArrival" });
                  }}
                >
                  New Arrival
                </li>
                <li
                  className={state.featured ? "clicked" : ""}
                  onClick={() => {
                    dispatchOne({ type: "featured" });
                  }}
                >
                  Featured
                </li>
                <li
                  className={state.onSale ? "clicked" : ""}
                  onClick={() => {
                    dispatchOne({ type: "onSale" });
                  }}
                >
                  On Sale
                </li>
                <li
                  className={state.trending ? "clicked" : ""}
                  onClick={() => {
                    dispatchOne({ type: "trending" });
                  }}
                >
                  Trending
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane">
            <AnimatePresence mode="wait">
              {state.newArrival && (
                <motion.div
                  className="tab-item"
                  variants={container}
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                >
                  <div className="products-container">
                    <div className="row gap-1">
                      {Products?.map((item, index) => {
                        return (
                          item?.displayCategory?.includes("new arrival") && (
                            <motion.div
                              className="col-6 col-md-4 col-lg-3"
                              key={index}
                              variants={tabItemVariant}
                            >
                              <ProductItem {...item} />
                            </motion.div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {state.featured && (
                <motion.div
                  className="tab-item"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="products-container">
                    <div className="row gap-1">
                      {Products.map((item, index) => {
                        return (
                          item?.displayCategory?.includes("featured") && (
                            <motion.div
                              variants={tabItemVariant}
                              className="col-6 col-md-4 col-lg-3"
                              key={index}
                            >
                              <ProductItem {...item} />
                            </motion.div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {state.onSale && (
                <motion.div
                  className="tab-item"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="products-container">
                    <div className="row gap-1">
                      {Products.map((item, index) => {
                        return (
                          item?.displayCategory?.includes("onsale") && (
                            <motion.div
                              variants={tabItemVariant}
                              className="col-6 col-md-4 col-lg-3"
                              key={index}
                            >
                              <ProductItem {...item} />
                            </motion.div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {state.trending && (
                <motion.div
                  className="tab-item"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="products-container">
                    <div className="row gap-1">
                      {Products.map((item, index) => {
                        return (
                          item?.displayCategory?.includes("trending") && (
                            <motion.div
                              variants={tabItemVariant}
                              className="col-6 col-md-4 col-lg-3"
                              key={index}
                            >
                              <ProductItem {...item} />
                            </motion.div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ad */}

      <div className="ad">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-6">
              <a href="/">
                <div className="inner-ad">
                  <figure>
                    <div className="img">
                      <img src={ad1} alt="ad" />
                    </div>
                  </figure>
                  <div className="caption">
                    <div>
                      <h3>
                        Sale Furniture
                        <br /> For Summer
                      </h3>
                      <p>Great Discounts Here</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a href="/">
                <div className="inner-ad">
                  <figure>
                    <div className="img">
                      <img src={ad2} alt="ad" />
                    </div>
                  </figure>
                  <div className="caption two">
                    <div>
                      <h3>
                        Office Chair
                        <br /> For Best Offer
                      </h3>
                      <p>Great Discounts Here</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* section news */}

      <section className="news">
        <SectionTitle
          heading={"latest news"}
          text={
            "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"
          }
        />

        <div className="container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {newsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="news-item">
                  <a href="/">
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                  </a>

                  <div className="content">
                    <h3>
                      <a href="/">{item.title}</a>
                    </h3>
                    <div className="info">
                      <div className="user">
                        By <a href="/">{item.user}</a>
                      </div>
                      <div className="date">
                        <p>{item.date}</p>
                      </div>
                    </div>
                    <p>{item.text}</p>
                    <Button type={"black"}>read more</Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
