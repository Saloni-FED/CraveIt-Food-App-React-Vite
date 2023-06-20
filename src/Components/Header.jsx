import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLoginClick = (loginInfo) => {
    console.log(loginInfo)
    setIsLogin(loginInfo);
  };
  return (
    <>
      <div className="flex bg-black text-lg text-white justify-between shadow-xl border-box" >
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
            <img
              className="w-10 hover:font-bold"
              src="https://www.shutterstock.com/image-illustration/brown-map-pointer-icon-shopping-600w-272565896.jpg"
              alt="cart"
              srcset=""
            />
          </li>
          <li className="hover:font-bold">
            <Link to="/instamart">Mart</Link>
          </li>
        </ul>
        {isLogin ? (
          <button className="mr-20 border-2 border-white rounded-md px-11 my-5 " onClick={()=>handleLoginClick(false)}>Login in</button>
        ) : (
          <button className="mr-20 border-2 border-white rounded-md px-11 my-5 "onClick ={()=>handleLoginClick(true)} >Sign in </button>
        )}
       {/* <button>Submit</button> */}
      </div>
    </>
  );
};
export default HeaderComponent;
