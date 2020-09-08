import React from "react";
import { parseToRupiah } from "../helpers/index";
import { text, button } from "../helpers/class_name.json"
import "../css/home/card_product.css";
import "../css/components/button.css";
import "../css/components/image.css";
import "../css/components/text.css";
const CardProduct = ({ product, addCart }) => {
  const selectProduct = (event) => {
    event.preventDefault();
    addCart(product);
  };
  return (
    <div
      className="card-product"
      style={{ borderRadius: "20px" }}
      key={product.id}
    >
      <img src={product.image} className="product-image" alt="..." />
      <div className="card-body">
        <div className={`${text.p1} product-category text-icon`}>
          <ion-icon name="fast-food" />
          {product.category_name}
        </div>
        <div className={`${text.h2} product-name`}>{product.name}</div>
        <div className={text.p1}>{parseToRupiah(product.price)}</div>
        <div className={text.p2}>Stock: {product.quantity}</div>
        <button
          type="button"
          className={`${button.primary} btn ${text.p1}`}
          onClick={selectProduct}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
