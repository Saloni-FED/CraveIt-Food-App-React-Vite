import { useParams } from "react-router-dom";
import useRestaurant from "../../utils/useRestaurant";
import MenuCard from "./MenuCard";
const RestaurantMenu = () => {
  let params = useParams();
  const [menuRestaurant, dishName] = useRestaurant(params.id);

  return !dishName ? (
    <h1 className="text-center mt-12 font-bold text-lg">Wait for a Moment.....</h1>
  ) : (
    <div className="grid gap-2">
      {dishName.map((menuItems, i) => {
        return <MenuCard element={menuItems} key={i} />;
      })}
    </div>
  );
};
export default RestaurantMenu;
