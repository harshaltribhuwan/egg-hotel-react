import React from "react";
import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";
import ImageThree from "../images/egg-3.jpg";
import ImageFour from "../images/egg-4.jpg";
import ImageFive from "../images/egg-5.jpg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-10 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-10 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$18</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageThree}
          alt="egg"
          className="h-full rounded mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Cuttlet</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$21</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFour}
          alt="egg"
          className="h-full rounded mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Plain</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$28</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFive}
          alt="egg"
          className="h-full rounded mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Special</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
