import Shimmer from "../Components/Shimmer";
import { useState, useEffect } from "react";
import { RestroList } from "./RestroList";
import { Link } from "react-router-dom";
import useFilterData from "../../utils/helperFunction";
import useFetch from "../../utils/useFetch";

const Body = () => {
  let { restaurants } = useFetch();
  const [searchText, setSearchText] = useState("");
  const filterRestaurant = useFilterData(searchText, restaurants);
  console.log(restaurants);

  return restaurants?.length == 0 ? (
    <h1 className="flex justify-center mt-11">Wait for a Moment......</h1>
  ) : (
    <>
      <div className="flex justify-center py-11  bg-slate-100   ">
        <input
          data-testid="search-input"
          className="w-96 p-2 pl-5 shadow-lg bg-white border-none outline-none"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button type="search" data-testid="search-btn">
          <span className="ml-2 ">🔍</span>
        </button>
      </div>
      {filterRestaurant.length == 0 ? (
        <h1 className="text-center font-medium">Oops Sorry Match Not found</h1>
      ) : (
        <div className="grid grid-cols-5 gap-y-4" data-testid="res">
          {filterRestaurant.map((restro) => {
            return (
              <Link
                to={`/restaurantMenu/${restro.data.data.id}`}
                key={restro.data.data.id}
              >
                <RestroList restaurant={restro.data.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
