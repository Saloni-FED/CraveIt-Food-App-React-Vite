import { useSelector } from "react-redux";
import CartMain from "./CartMain";
const Cart = ()=>{
    let cartItems = useSelector((store) => store.cartItems.items)
    return <div>
        <h1>{cartItems.length}</h1>
        {console.log(cartItems)}
    </div>
}
export default Cart;

// {console.log(cart)