import React from "react";
import "./styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput " />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link className="link" to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className="header_option header_option--active"
          >
            <span className="header_optionLineOne">Hello,</span>
            <span className="header_optionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option header_option--active">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLinetwo">{"&"} Orders</span>
        </div>
        <div className="header_option header_option--active">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>
        <Link to="checkout">
          <div className="header_optionBasket ">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header_optionCartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
