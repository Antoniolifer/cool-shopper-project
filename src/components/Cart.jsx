import { useState, useContext, useEffect } from "react";
import CartList from "./CartList";
import { RiShoppingBag3Fill, RiShoppingBag3Line } from "react-icons/ri";
import { CartContext } from "../context/CartContext";

function Cart() {
  const [showingCart, setShowingCart] = useState(false);
  const { cartContent } = useContext(CartContext);

  const [numItems, setNumItems] = useState("");
  const toggleCart = () => {
    setShowingCart((prev) => !prev);
  };
  useEffect(() => {
    setNumItems(cartContent.length || "");
  }, [cartContent]);
  return (
    <div
      className="text-center m-2 pointer-events-none
 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 h-screen z-20 md:z-0"
    >
      <button
        onClick={toggleCart}
        className="text-2xl underline top-6 right-5 absolute md:pl-12 lg:pl-0 pointer-events-auto md:static tracking-wide  hover:text-violet-700 transition-all duration-1000 ease-in-out "
      >
        <span className="text-4xl">
          {showingCart ? (
            <RiShoppingBag3Fill className="inline " />
          ) : (
            <RiShoppingBag3Line className="inline " />
          )}
        </span>
        {numItems}
      </button>
      {showingCart && <CartList />}
    </div>
  );
}

export default Cart;
