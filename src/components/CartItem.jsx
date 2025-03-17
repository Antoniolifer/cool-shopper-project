import Image from "./Image";
function formatDescription(str, limit = 80) {
  return str.substring(0,limit).split(' ').slice(0,-1).join(' ') + '...';
}

function CartItem({item, deleteCartItem}) {
  return (
    <div className="border-b-2 border-white mb-1 p-1 flex items-center relative">
        {/* <img src={item.image} alt="" className="w-2/6 h-full"/> */}
        <span className="w-full h-24 lg:h-full"><Image src={item.image} alt=""/></span>
        <h1 className="text-md ml-1">{formatDescription(item.title, 30)}</h1>
        <button onClick={()=> deleteCartItem(item)} className="text-sm absolute right-0 top-0 border-1 rounded-3xl px-1.25 py-0.25 hover:text-white hover:bg-gray-500 ">&#x2715;</button>

    </div>

  )
}

export default CartItem