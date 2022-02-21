import React from "react";
import Product from "./Product";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/61A+xtBFsAL._SX3740_.jpg"
          alt=""
        />
        <div className="home-row">
          <Product
            id={2123123}
            title="The Lean Startup"
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={10}
          />
          <Product
            id={12312312}
            title={
              "Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear earphones with mic (Black)"
            }
            price={29.99}
            image="https://m.media-amazon.com/images/I/51R4FJdgbMS._AC_UL480_QL65_.jpg"
            rating={4}
          />
          <Product
            id={12312312}
            title={
              "Redmi 9A Sport (Metallic Blue, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
            }
            price={199.99}
            image="https://m.media-amazon.com/images/I/81p+EkIvUUL._AC_UL480_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={12412353}
            title=""
            price={255.99}
            image="https://m.media-amazon.com/images/I/61ngJQlhPQL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id={3215314123}
            title="Mi Power Bank 3i 20000mAh | 18W Fast PD Charging | Input- Type C and Micro USB| Triple Output | Sandstone Black"
            price={24.99}
            image="https://m.media-amazon.com/images/I/71lVwl3q-kL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id={123125123}
            title="Samsung Galaxy A50 (6GB RAM, 128GB Storage) - Midnight Black"
            price={699.99}
            image="https://m.media-amazon.com/images/I/81TW1LDfPSL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
