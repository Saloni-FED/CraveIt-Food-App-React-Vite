import { CDN_IMG_URL } from "./constant";

const CartMain = (props) => {
  // console.log(props.cart.quantity);
  return (
    <div className="main ">
      <hr className="w-4/5 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="flex pl-32 space-x-11">
        <img
          className="w-48"
          src={CDN_IMG_URL + props.cart.imageId}
          alt="image"
        />

        <h1 className="font-bold pl-20">{props.cart.price / 100}</h1>
        <h2 className="pl-56">{props.cart.quantity}</h2>
        {props.cart.quantity > 1 ? (
          <h2 className="font-bold pl-56">
            {(props.cart.price / 100) * props.cart.quantity}
          </h2>
        ) : (
          <h1 className="font-bold pl-56">{props.cart.price / 100}</h1>
        )}
      </div>
    </div>
  );
};

export default CartMain;
