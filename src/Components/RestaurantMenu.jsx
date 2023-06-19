import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "./constant";
import useRestaurant from "../../utils/useRestaurant";
import MenuCard from "./MenuCard";
const RestaurantMenu = () => {
  let params = useParams();
  const [MenuRestaurant, DishName] = useRestaurant(params.id);

  return !MenuRestaurant || !DishName ? (
    <h1>Wait for a moment.....</h1>
  ) : (
    <div className="grid gap-2">
      {DishName.map((RestaurantMenu, i) => {
        return <MenuCard element={RestaurantMenu} />;
      })}
    </div>
  );
};
export default RestaurantMenu;
