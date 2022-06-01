import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__rating">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐</p>
            ))}
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/31NmWpDfMZL._AC_SY200_.jpg" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
