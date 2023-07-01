import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "./constant";
import useRestaurant from "../../utils/useRestaurant";
import MenuCard from "./MenuCard";
const RestaurantMenu = () => {
  let params = useParams();
  const [menuRestaurant, dishName] = useRestaurant(params.id);

  return  !dishName ? (
    <h1>Wait for a moment.....</h1>
  ) : (
    <div className="grid gap-2">
      {dishName.map((menuItems, i) => {
        return <MenuCard element={menuItems} />;
      })}
    </div>
  );
};
export default RestaurantMenu;
