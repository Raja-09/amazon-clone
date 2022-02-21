import React from "react";
import "./styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const getRating = (val) => {
    let ratingString = "";
    for (let i = 0; i < val && i < 5; i++) {
      ratingString += "⭐";
    }
    return ratingString;
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct-image" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">{getRating(rating)}</div>
        <button className="checkoutProduct-button" onClick={removeFromCart}>
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
