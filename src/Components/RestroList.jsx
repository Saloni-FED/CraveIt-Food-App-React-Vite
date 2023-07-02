export const RestroList = (props) => {
  return (
    <>
      <div className="m-2 p-6 box-border h-full flex flex-col transition duration-300  shadow-xl hover:-translate-y-5  ">
        <img
          className="mb-2 w-full"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            props?.restaurant?.data?.cloudinaryImageId
          }
          alt="food Image"
        />
        <h2 className="font-bold text-xl">{props.restaurant?.data?.name}</h2>
        <h2 className="font-light text-slate-500">
          {props.restaurant?.data?.cuisines?.join(", ")}
        </h2>
        <span className="inline-grid grid-cols-2 gap-3 mt-2">
          <span className="font-light inline  text-slate-500">
            {props.restaurant?.costForTwoString?.toLowerCase()}
          </span>
          {props.restaurant?.data?.avgRating?.toString(10) < 4 ? (
            <span className="bg-amber-300 inline text-white place-self-end px-3 rounded-sm font-bold">
              {props.restaurant?.data?.avgRating}
            </span>
          ) : (
            <span className="bg-lime-600 inline text-white place-self-end px-3 rounded-sm font-bold">
              {props.restaurant?.data?.avgRating}
            </span>
          )}
        </span>
      </div>
    </>
  );
};
