import { useState , useEffect } from "react";
import { RESTAURANT_MENU_URL }  from "../src/Components/constant";
const useRestaurant = (params)=>{
    // console.log(params)
    const [menuRestaurant,setMenuRestaurant] = useState();
    const [dishName , setDishName] = useState();
    useEffect(()=>{
       menuList(); 
    },[]);
    async function menuList(){
    let menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.517929&lng=88.38341199999999&restaurantId=" + params)
    let menuList  = await menuData.json();
    //  console.log(menuList?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    //  console.log(menuList?.data?.cards[0]?.card?.card?.info)
     setMenuRestaurant(menuList?.data?.cards[0]?.card?.card?.info)
    //  console.log(menuList?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
     setDishName(menuList?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }
    
    return [menuRestaurant,dishName];
}
export default useRestaurant;