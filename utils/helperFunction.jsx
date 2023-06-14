export function filterData(searchText, restaurants) {
    const restaurantFilter = restaurants.filter((restaurant) => {
      return restaurant.data.name
        .toUpperCase()
        .includes(searchText.toUpperCase());
    });
    return restaurantFilter;
  }