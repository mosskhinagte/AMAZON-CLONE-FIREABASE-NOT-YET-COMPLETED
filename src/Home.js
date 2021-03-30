import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img14/Invictus/TALA/BETA/PrimeNow/3p/pc_main.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123456"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={10}
          />
          <Product
            id="723453"
            title="
            Rewy WT113 Splashproof + Waterproof High Bass Sound Wireless Bluetooth Speaker with USB/AUX & SD Card Support Compatible with All Devices - Assorted Colour"
            price={239.0}
            image="https://m.media-amazon.com/images/I/515T+I9lzYL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="123656"
            title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
            price={99.0}
            rating={10}
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
          />
          <Product
            id="120456"
            title="Northzone Anti Theft Backpack with USB Charging Port 15.6 Inch Laptop Bagpack Waterproof Casual Unisex Bag for School College Office Suitable for Men Women"
            price={290.0}
            rating={10}
            image="https://m.media-amazon.com/images/I/61Qhk6capaL._AC_UL320_.jpg"
          />
          <Product
            id="123458"
            title="Redmi 9 (Sporty Orange, 4GB RAM, 128GB Storage"
            price={100.0}
            rating={10}
            image="https://m.media-amazon.com/images/I/61Kov7PY9VL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1234509"
            title="Samsung 108 cm (43 Inches) Full HD LED Smart TV UA43N5470 (Black) (2019 model"
            price={290}
            rating={10}
            image="https://m.media-amazon.com/images/I/81VjtEmHh9L._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
