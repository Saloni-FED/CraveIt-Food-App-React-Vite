import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const HeaderComponent = () => {
  const carts = useSelector((store) => store.cartItems.items);
  console.log(carts);
  return (
    <>
      <div className="flex bg-black text-lg text-white justify-between shadow-xl border-box">
        <img className="w-44 h-20 ml-40 py-2" src="./public/Food logo.png" />
        <ul className="flex mt-5 justify-around pr-50">
          <li className="mr-6 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6 hover:font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-6 hover:font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mr-6 hover:font-bold">
  
            <Link to="/cart">
              <img
                className="w-10 hover:font-bold inline"
                src="https://www.shutterstock.com/image-illustration/brown-map-pointer-icon-shopping-600w-272565896.jpg"
                alt="cart"
                srcset=""
              />
              {" " + carts.length}
            </Link>
          </li>
          <li className="hover:font-bold">
            <Link to="/Faq">FAQ</Link>
          </li>
        </ul>
        <button className="font-white mr-11">Submit</button>
        {/* <button>Submit</button> */}
      </div>
    </>
  );
};
export default HeaderComponent;
