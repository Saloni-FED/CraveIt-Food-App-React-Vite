import {useState , useEffect} from "react"
import { RESTAURANT_LIST_URL } from "../src/Components/constant"
const useRestaurantFilter = ()=>{
  const [restaurants,setRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurants] = useState([]);
  useEffect(()=>{
    restaurantsAPI();
  },[])
  async function restaurantsAPI(){
    const api = await fetch(RESTAURANT_LIST_URL);
    const data = await api.json();
    setRestaurants(data?.data?.cards[2].data?.data?.cards);
    setFilterRestaurants(data?.data?.cards[2].data?.data?.cards);
}
return [restaurants,filterRestaurant];
}
export default useRestaurantFilter;