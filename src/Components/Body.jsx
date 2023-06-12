import Shimmer from "../Components/Shimmer";
import { useState, useEffect } from "react";
import { RestroList } from "./RestroList";
import { Link } from "react-router-dom";

// Creating a filter function
function filterData(searchText, restaurants) {
  const restaurantFilter = restaurants.filter((restaurant) => {
    return restaurant.data.name
      .toUpperCase()
      .includes(searchText.toUpperCase());
  });
  return restaurantFilter;
}
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    restaurantsAPI();
  }, []);

  async function restaurantsAPI() {
    let api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3667296&lng=72.819814&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await api.json();
    setRestaurants(data?.data?.cards[2].data?.data?.cards);
    setFilterRestaurants(data?.data?.cards[2].data?.data?.cards);
  }

  return restaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        type="search"
        onClick={() => {
          // Define a function to filter the restaurant list
          const data = filterData(searchText, restaurants);
          setFilterRestaurants(data);
        }}
      >
        Search
      </button>
      {filterRestaurant.length == 0 ? (
        <h1>Oops Sorry Match Not found</h1>
      ) : (
        <div className="body-main">
          {filterRestaurant.map((restro) => {
            return (
              <Link
                to={`/restaurantMenu/${restro.data.id}`}
                key={restro.data.id}
              >
                <RestroList restaurant={restro.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
