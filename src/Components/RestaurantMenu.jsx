import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "./constant";
import useRestaurant from "../../utils/useRestaurant";
const RestaurantMenu = () => {
  // const [MenuRestaurant, setMenuRestaurant] = useState([]);
  // const [DishName , setDishName] = useState([])
  let params = useParams();
  const [MenuRestaurant,DishName] = useRestaurant(params.id)
  
  return (!MenuRestaurant || !DishName ) ? <h1>Wait for a moment.....</h1> :(
    <div className="menu">
      <div className="list">
      <h1>Menu</h1>
      <h2>{MenuRestaurant?.name}</h2>
      <img src={CDN_IMG_URL + MenuRestaurant?.cloudinaryImageId} />
      <h2>{MenuRestaurant?.costForTwoMessage}</h2>
      <h2>{MenuRestaurant?.city}</h2>
      </div>
      <div className="menuList">
       {DishName.map((element,i)=>{
        return <li className="menuName">{element?.card?.info?.name} key = {element?.card?.info?.id}</li>
      })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
