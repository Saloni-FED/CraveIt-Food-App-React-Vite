import { CDN_IMG_URL } from "./constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem, deleteItem } from "../../utils/ReduxStore/cartSlice";
const MenuCard = (props) => {
  const dispatch = useDispatch();
  const handleAddItems = (items) => {
    dispatch(addItem(items));
  };
  let cartItems = useSelector((store) => store.cartItems.items);

  const handleDeleteItems = (itemsId) => {
    dispatch(deleteItem(itemsId));
  };

  return (
    <>
    <div className=" flex  p-11 justify-center ">
      {/* {console.log(element?.card?.info)} */}
      <div className="pl-11 basis-1/2">
        <h1 className="font-bold text-xl mb-3">
          {props.element?.card?.info.name}
        </h1>
        {/* <h1>{props.element?.card?.info.id}</h1> */}
        <h1 className="font-light text-slate-500">
          {props.element?.card?.info.description}
        </h1>
        <h1 className="font-bold text-slate-500 mt-3">
          Cost For two ${props.element?.card?.info.price / 100}
        </h1>
      </div>
      <div className="border-black basis-1/4">
        <img
          className="h-36 w-auto ml-0 rounded-lg mb-3 "
          src={CDN_IMG_URL + props.element?.card?.info?.imageId}
          alt=""
        />
        <div className="flex px-14">
          <div>
            <button
              className="bg-lime-500 text-white px-3 rounded mx-2  hover:bg-slate-700"
              onClick={() => {
                handleDeleteItems(props.element.card.info.id);
              }}
            >
              -
            </button>
            {cartItems.find((item) => item.id === props.element.card.info.id)
              ?.quantity > 0 ? (
              cartItems.find((item) => item.id === props.element.card.info.id)
                ?.quantity
            ) : (
              <p1>Add</p1>
            )}
            <button
              className="bg-lime-500 text-white px-3 rounded mx-2  hover:bg-slate-700"
              onClick={() => {
                handleAddItems(props.element.card.info);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr className="w-4/5 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200"></hr>
  </>
  );
};
export default MenuCard;
