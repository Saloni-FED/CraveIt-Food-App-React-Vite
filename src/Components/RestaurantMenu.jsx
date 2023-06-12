import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "./constant";
const RestaurantMenu = () => {
  const [MenuRestaurant, setMenuRestaurant] = useState([]);
  const [DishName , setDishName] = useState([])
  let params = useParams();
  useEffect(() => {
    menuList();
  }, []);
  async function menuList() {
    let menuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.517929&lng=88.38341199999999&restaurantId="+ params.id
    );
    let menuList = await menuData.json();
    
    setDishName(menuList?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    setMenuRestaurant(menuList?.data?.cards[0]?.card?.card?.info);
  }
  return (
    <div className="menu">
      <div className="list">
      <h1>Menu</h1>
      <h2>{MenuRestaurant?.name}</h2>
      <img src={CDN_IMG_URL + MenuRestaurant?.cloudinaryImageId} />
      <h2>{MenuRestaurant?.costForTwoMessage}</h2>
      <h2>{MenuRestaurant?.city}</h2>
      </div>
      <div className="menuList">
       {DishName.map((element)=>{
        return <p className="menuName">{element?.card?.info?.name}</p>
      })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
