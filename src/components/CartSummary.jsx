import { useContext } from "react";
import { CartContext } from "../context/CartContext"

function CartSummary() {
  const {cartContent, clearCart } = useContext(CartContext);

  return (
    <div className='flex flex-wrap justify-center'>
        <h1 className='w-1/2 p-1'>total:</h1>
        <h1 className='w-1/2 text-end p-1'>${cartContent.reduce( (acc, item) => acc + Number(item.price), 0)}</h1>
        <button onClick={clearCart} className="cursor-pointer py-1 px-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">clear cart</button>
    </div>
  )
}

export default CartSummary