import { useState, useEffect } from "react";

const useFetch = () => {
  let [restaurants, setRestaurants] = useState([]);
  // let [isRestaurant, setIsRestaurants] = useState(false);
  useEffect(() => {
    restaurantsAPI();
  }, []);
  async function restaurantsAPI() {
    const api = await fetch(`${import.meta.env.VITE_API_URL}/restaurants?offset=0`);
    const data = await api.json();
    console.log(data?.data.cards) 
    const restaurants = data?.data?.cards.filter(card => card.cardType === "restaurant") 
    // console.log(data?.data?.cards[2]?.data?.data?.cards[0]?.data)
    setRestaurants(restaurants);

  }
  return { restaurants };
};
export default useFetch;
