export const RestroList = (props) => {
    return (
      <>
        <div className="w-40 m-2 border-2 box-border ">
          <img
            className="food-img"
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              props.restaurant.cloudinaryImageId
            }
            alt="food Image"
          />
          <h2>{props.restaurant.name}</h2>
          <h2>{props.restaurant.totalRatings}</h2>
          <h3>{props.restaurant.lastMileTravelString}</h3>
        </div>
      </>
    );
  };