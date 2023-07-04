import { clearItem } from "../../utils/ReduxStore/cartSlice";
import { useDispatch } from "react-redux";
// import { UseSelector } from "react-redux";
const ClearAllItems = () => {
  let dispatch = useDispatch();
  const handleDeleteAll = () => {
    dispatch(clearItem());
  };
  return (
    <button
      className=" w-fit absolute left-32 mt-5 px-11 py-5 border-2 border-lime-500 rounded "
      onClick={handleDeleteAll}
    >
      Remove All
    </button>
  );
};
export default ClearAllItems;
