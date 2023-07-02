import Shimmer from "../Components/Shimmer";
import { useState, useEffect } from "react";
import { RestroList } from "./RestroList";
import { Link } from "react-router-dom";
import useFilterData from "../../utils/helperFunction";
import useFetch from "../../utils/useFetch";

const Body = () => {
  let { restaurants } = useFetch();
  const [searchText, setSearchText] = useState();
  const [filterRestaurant, setFilterRestaurants] = useState([]);
  useEffect(() => {
    setFilterRestaurants(restaurants);
  }, [restaurants]);

  return restaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center py-11  bg-slate-100   ">
        <input
          className="w-96 p-2 pl-5 shadow-lg bg-white border-none outline-none"
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
          <span className="ml-2 ">🔍</span>
        </button>
      </div>
      {filterRestaurant.length == 0 ? (
        <h1>Oops Sorry Match Not found</h1>
      ) : (
        <div className="grid grid-cols-5 gap-y-4">
          {filterRestaurant.map((restro) => {
            return (
              <Link
                to={`/restaurantMenu/${restro.data.id}`}
                key={restro.data.id}
              >
                <RestroList restaurant={restro} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
