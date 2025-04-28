import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-6xl my-10">Cart</h1>
        <Link to="/">
          <button className="p-2 m-2 text-xl shadow-lg cursor-pointer bg-black text-white rounded-lg hover:scale-95">
            Continue Shopping
          </button>
        </Link>
        <button
          className="p-2 m-2 cursor-pointer bg-amber-900 text-white rounded-lg hover:scale-95 text-xl shadow-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-[60%] mx-auto my-8 shadow-lg p-4">
        {cartItems.length === 0 && (
          <h1 className="text-2xl font-bold text-center">
            Cart is empty. Add items to the cart.
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
