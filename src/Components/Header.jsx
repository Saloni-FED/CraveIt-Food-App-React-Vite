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
      <div className="header">
        <img className="main-logo" src="./public/Food logo.png" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="verti-li">
            <img
              className="cart-logo"
              src="https://www.shutterstock.com/image-illustration/brown-map-pointer-icon-shopping-600w-272565896.jpg"
              alt="cart"
              srcset=""
            />
          </li>
          <li>
            <Link to="/instamart">Mart</Link>
          </li>
        </ul>
        {isLogin ? (
          <button onClick={()=>handleLoginClick(false)}>Login in</button>
        ) : (
          <button onClick ={()=>handleLoginClick(true)} >Sign in </button>
        )}
        // {/* <button>Submit</button> */}
      </div>
    </>
  );
};
export default HeaderComponent;
