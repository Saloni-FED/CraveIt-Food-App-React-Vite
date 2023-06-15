import { useState } from "react";

const useFilterData = (searchText, restaurants) => {
  if (searchText.trim() == "") {
    return restaurants;
  } else {
    const restaurantFilter = restaurants.filter((restaurant) => {
      return restaurant.data.name
        .toUpperCase()
        .includes(searchText.toUpperCase());
    });
    return restaurantFilter;
  }
};

export default useFilterData;
