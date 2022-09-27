import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product, handlerAddToCart }) => {
  //   const { product, handlerAddToCart } = props;
  const { img, name, seller, price, ratings } = product;
  //const { img, name, seller, price, ratings } =props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price:${price}</p>
        <p>
          <small>Seller:{seller}</small>
        </p>
        <p>
          <small>Ratings:{ratings}</small>
        </p>
      </div>
      <button onClick={() => handlerAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
