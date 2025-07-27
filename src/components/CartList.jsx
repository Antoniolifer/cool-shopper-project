import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
function CartList() {
  const { cartContent, deleteCartItem } = useContext(CartContext);
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }, [cartContent]);
  return (
    <div
      ref={ref}
      className="bg-gray-100 mt-12 md:mt-0 p-1 border-2 border-gray-500 text-left rounded max-h-3/5 md:max-h-3/4 overflow-y-scroll pointer-events-auto"
    >
      {cartContent.length > 0 ? (
        <>
          {cartContent.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                deleteCartItem={deleteCartItem}
              />
            );
          })}
          <CartSummary />
        </>
      ) : (
        <p className="text-gray-500 my-6 text-center">
          No items in your cart yet.
        </p>
      )}
    </div>
  );
}

export default CartList;
