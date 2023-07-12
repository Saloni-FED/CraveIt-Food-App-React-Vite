import { useState , useEffect } from "react";
const useRestaurant = (id)=>{
    // console.log(params)
    const [menuRestaurant,setMenuRestaurant] = useState();
    const [dishName , setDishName] = useState();
    useEffect(()=>{
       menuList(); 
    },[]);
    async function menuList(){
    let menuData = await fetch(`${import.meta.env.VITE_API_URL}/menu?id=${id}`)
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