import "./styles/Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <h2 className="checkout-title">
          Hello, {user ? user?.email : "Guest"} <br /> Your Shopping Cart
        </h2>
        {cart.map((item) => (
          <CheckoutProduct
            key={Math.random()}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
