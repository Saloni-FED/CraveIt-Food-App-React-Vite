import { useState, useEffect } from "react";
import { RESTAURANT_LIST_URL } from "../src/Components/constant";
const useFetch = () => {
  let [restaurants, setRestaurants] = useState([]);
  let [isRestaurant, setIsRestaurants] = useState(false);
  useEffect(() => {
    restaurantsAPI();
  }, []);
  async function restaurantsAPI() {
    const api = await fetch(RESTAURANT_LIST_URL);
    const data = await api.json();
    setRestaurants(data?.data?.cards[2].data?.data?.cards);
    setIsRestaurants(true);
  }
  return { restaurants, isRestaurant };
};
export default useFetch;
