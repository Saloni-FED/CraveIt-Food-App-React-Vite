import { CDN_IMG_URL } from "./constant";
const MenuCard = (props) => {
  return (
    <div className=" flex  p-11 justify-center hover-:bg-slate-600 ">
      {/* {console.log(element?.card?.info)} */}
      <div className="pl-11 basis-1/2">
        <h1 className="font-bold text-xl mb-3">
          {props.element?.card?.info.name}
        </h1>
        {/* <h1>{props.element?.card?.info.id}</h1> */}
        <h1 className="font-light text-slate-500">
          {props.element?.card?.info.description}
        </h1>
      </div>
      <div className=" border-black basis-1/4">
        <img
          className="h-40 w-64 ml-0"
          src={CDN_IMG_URL + props.element?.card?.info?.imageId}
          alt=""
        />
        <button className="inline bg-lime-500 font-white ml-40 ">-</button>
        <button className="inline bg-lime-500 font-white  ">Add</button>
        <button className="inline bg-lime-500 font-white  br">+</button>
      </div>
    </div>
  );
};
export default MenuCard;
