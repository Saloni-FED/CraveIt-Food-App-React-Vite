import { useSelector } from "react-redux";
import CartMain from "./CartMain";
import { Link } from "react-router-dom";
import ClearAllItems from "./ClearAllItems"
const Cart = () => {
  let cartItems = useSelector((store) => store.cartItems.items);
  // console.log(cartItems.quantity);
  return cartItems.length === 0 ? (
    <h1 className="flex justify-center font-bold text-lg mt-11">
      <Link to="/">Click Here to Check the Restaurant </Link>
    </h1>
  ) : (
    <div className="cart">
      <div className="flex pl-40 space-x-56">
        <h1 className="font-bold">Items</h1>
        <h1 className="font-bold pl-5">Price</h1>
        <h1 className="font-bold pl-5">Quantity</h1>
        <h1 className="font-bold ">Total</h1>
      </div>
      {cartItems.map((cartItem) => {
        return <CartMain cart={cartItem} />;
      })}
      <h1 className="font-bold  mr-48 w-fit absolute right-0 px-11 py-5 border-2 border-lime-500 rounded mt-5"> SubTotal : 
      {
       (cartItems.reduce((sum,currentValue)=> sum + (currentValue.price/100) * currentValue.quantity, 0))
      }</h1>
     <ClearAllItems />
    </div>
  );
};
export default Cart;


