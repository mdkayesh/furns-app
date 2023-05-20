import React, { useEffect, useState } from "react";
import SectionHero from "../SectionHero";
import { v4 as uuid } from "uuid";
// import { addDocument } from "../../Data/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useFormik } from "formik";
import { addDocument, storage } from "../../Data/firebase";
import { RiImageAddFill } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import { displayCategory, productCategory } from "../../Data/ProductsData";

const AdminPanel = () => {
  const [uploadImg, setUploadImg] = useState(null);
  const [productData, setProductData] = useState({
    imageUrls: [],
    imgName: [],
  });

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      category: "",
      displayCategory: "",
      prize: "",
      oldPrize: "",
      option: "",
      discount: "",
      stock: "",
      description: "",
    },

    onSubmit: (values, { resetForm }) => {
      addDocument({ ...productData, ...values });

      setProductData({
        imageUrls: [],
        imgName: [],
      });
      resetForm();
    },
  });

  console.log(values);

  useEffect(() => {
    if (uploadImg === null) {
      return;
    } else {
      uploadImg.forEach((img) => {
        if (img.name.includes(" ")) {
          return alert("image name must have without space");
        } else {
          const imgName = uuid() + img.name;

          const imgRef = ref(storage, `images/${imgName}`);
          uploadBytes(imgRef, img)
            .then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                setProductData((prev) => {
                  return {
                    ...productData,
                    imageUrls: [...new Set([...prev.imageUrls, url])],
                    imgName: prev.imgName
                      ? [...prev.imgName, imgName]
                      : [imgName],
                  };
                });
                // setImgUrlList((prev) => [...new Set([...prev, url])]);
              });
            })
            .catch((err) => console.log(err));
        }
      });
    }

    return () => null;
  }, [uploadImg]);

  // delete the image

  const deleteImage = (Url, imgName, imageUrls) => {
    productData[imgName].forEach((img) => {
      if (Url.includes(img)) {
        const imgRef = ref(storage, `images/${img}`);
        deleteObject(imgRef)
          .then(() => {
            let unRemoved = productData[imageUrls].filter(
              (item) => item !== Url
            );
            setProductData({ ...productData, [imageUrls]: unRemoved });
          })
          .catch((err) => {
            let unRemoved = productData[imageUrls].filter(
              (item) => Url !== item
            );

            productData({
              ...productData,
              [imageUrls]: unRemoved,
            });

            console.log(err.message);
          });
      }

      return;
    });
  };

  return (
    <div className="admin-panel">
      <SectionHero heading={"Admin Panel"} />
      <div className="admin-panel-form">
        <div className="container">
          <h2>Add Products</h2>
          <form
            className="add product"
            onSubmit={(e) => {
              handleSubmit(e);
              e.target.reset();
            }}
          >
            <div className="file-container">
              <label htmlFor="img" className="file-img">
                <RiImageAddFill />
              </label>
              <input
                type="file"
                name="img"
                id="img"
                onChange={(e) => setUploadImg([...e.target.files])}
                multiple
                required
              />
            </div>
            <div className="upload-img-container">
              {productData.imageUrls.map((url) => (
                <div key={url}>
                  <img src={url} alt="product-img" />
                  <div
                    className="icon"
                    onClick={() => deleteImage(url, "imgName", "imageUrls")}
                  >
                    <HiXMark />
                  </div>
                </div>
              ))}
            </div>

            {/* ------- */}

            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={values.category}
              onChange={handleChange}
              required
            >
              <option value={""}>Select a Category</option>
              {productCategory.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label htmlFor="displayCategory">Where to Display product</label>
            <div className="displayCategory">
              {displayCategory.map((category) => (
                <div className="item" key={category}>
                  <label htmlFor={category}>{category}</label>
                  <input
                    type="checkbox"
                    name={"displayCategory"}
                    value={category}
                    id={category}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <label htmlFor="prize">Product Prize</label>
            <input
              type="number"
              name="prize"
              id="prize"
              value={values.prize}
              min={0}
              required
              onChange={handleChange}
            />

            <label htmlFor="oldPrize">Old Prize</label>
            <input
              type="number"
              name="oldPrize"
              id="oldPrize"
              value={values.oldPrize}
              min={0}
              onChange={handleChange}
            />

            <label htmlFor="discount">Discount(%)</label>
            <input
              type="number"
              name="discount"
              id="discount"
              value={values.discount}
              min={0}
              onChange={handleChange}
            />

            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              name="stock"
              id="stock"
              required
              min={0}
              value={values.stock}
              onChange={handleChange}
            />

            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={values.description}
              onChange={handleChange}
            ></textarea>
            <button type="submit">add product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
