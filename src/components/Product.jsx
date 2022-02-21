import React from "react";
import { useStateValue } from "../StateProvider";
import "./styles/Product.css";
const getRating = (val) => {
  let ratingString = "";
  for (let i = 0; i < val && i < 5; i++) {
    ratingString += "⭐";
  }
  return ratingString;
};
function Product({ id, title, image, price, rating }) {
  const [,dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title} </p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          <p>{getRating(rating)}</p>
        </div>
      </div>
      <img className="product-image" src={image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
