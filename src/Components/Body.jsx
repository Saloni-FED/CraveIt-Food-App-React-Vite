import Shimmer from "../Components/Shimmer";
import { useState, useEffect } from "react";
import { RestroList } from "./RestroList";
import { Link } from "react-router-dom";
import useFilterData from "../../utils/helperFunction";
import useFetch from "../../utils/useFetch";

const Body = () => {
  let { restaurants, isRestaurant } = useFetch();
  const [searchText, setSearchText] = useState();
  const [filterRestaurant, setFilterRestaurants] = useState([]);
  console.log("Parent Initial Component = " + isRestaurant);
  useEffect(() => {
    setFilterRestaurants(restaurants);
    console.log("Parent useEffect =  " + isRestaurant);
  }, [restaurants]);

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
          let data = useFilterData(searchText, restaurants);
          console.log(data);
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
