import React from "react";
import { parseToRupiah } from "../helpers/index";
import "../css/home/card_product.css";
import "../css/components/button.css";
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
        <div className="product-category">
          <i className="fas fa-utensils" />
          {product.category}
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">{parseToRupiah(product.price)}</div>
        <div className="product-stock">Stock: {product.quantity}</div>
        <button
          type="button"
          className="btn button-primary"
          onClick={selectProduct}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
