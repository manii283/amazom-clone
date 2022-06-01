import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61XJMtByggL._SX3000_.jpg"
          alt="img"
        />
        <div className="home__row">
          <Product
            title="The Wireless headphone"
            price={40}
            image="https://m.media-amazon.com/images/I/31NmWpDfMZL._AC_SY200_.jpg"
            rating={5}
          />
           <Product
            title="The Wireless headphone"
            price={40}
            image="https://m.media-amazon.com/images/I/31NmWpDfMZL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Wireless computer mouse"
            price={60}
            image="https://m.media-amazon.com/images/I/51p1FOjU-lL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            title="The Hp laptop with graphics"
            price={1500}
            image=" https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            title="The slimest phone with 128gb storage"
            price={500}
            image="https://m.media-amazon.com/images/I/612dMOJRooL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The LED Tv with super HD 3D"
            price={2000}
            image="https://m.media-amazon.com/images/I/51vC9m96dQL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
