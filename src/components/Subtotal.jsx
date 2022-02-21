import React from "react";
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
function Subtotal() {
    const [{cart},dispatch] = useStateValue();
    const getPrice = ()=>{
        let sum = 0;
        for(let i = 0; i < cart.length; i++){
            sum += cart[i].price;
        }
        return "$"+sum;
    }
    const clearCart = ()=>{
        dispatch({
            type:"CLEAR_CART"
        })
    }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Subtotal;
