import Shimmer from "../Components/Shimmer";
import { useState, useEffect } from "react";
import { RestroList } from "./RestroList";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helperFunction";
import useRestaurantFilter from "../../utils/useRestaurantFilter";

const Body = () => {
  // const [restaurants, setRestaurants] = useState([]);
  // const [filterRestaurant, setFilterRestaurants] = useState([]);
  const [restaurants, filterRestaurant] = useRestaurantFilter();
  const [searchText, setSearchText] = useState();

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
          console.log(data)
        }}
      >
        Search
      </button>
      {filterRestaurant.length == 0 ? (
        <h1>Oops Sorry Match Not found</h1>
      ) : (
        <div className="body-main">
          {restaurants.map((restro) => {
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
