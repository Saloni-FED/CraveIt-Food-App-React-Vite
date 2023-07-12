import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa'
import { useSelector } from "react-redux";
const HeaderComponent = () => {
  const cartItems = useSelector((store) => store.cartItems.items);
  return (
    <>
      <div className="flex bg-black text-lg text-white justify-between shadow-xl border-box" >
        <img  className="w-44 h-20 ml-40 py-2" src="./public/Food logo.png" data-testid="logo"/>
        <ul data-testid="ul" className="flex mt-5 justify-around pr-50">
          <li className="mr-6 hover:font-bold">
            <Link to="/"><FaHome className="text-2xl hover:text-lime-300"/></Link>
          </li>
          <li className="mr-6 hover:font-bold">
            <Link to="/about"><FaInfoCircle className="text-2xl hover:text-lime-500"/></Link>
          </li>
          <li className="mr-6 hover:font-bold">
            <Link to="/cart" className="flex gap-2">
              <FaShoppingCart className="text-2xl hover:text-lime-500 "/>
             <span>{
              cartItems.reduce((previous,current)=> previous + current.quantity, 0)
             }</span>
            </Link>
          </li>
          <li className=" pr-11">
            <Link to="/Faq"><FaQuestionCircle className="text-2xl hover:text-lime-500"/></Link>
          </li>
        </ul>
       
      </div>
    </>
  );
};
export default HeaderComponent;
