import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Image from "./Image";

function formatDescription(str, limit = 80) {
  return str.substring(0, limit).split(" ").slice(0, -1).join(" ") + "...";
}
function ProductCard({ product }) {
  const { addItemToCart, cartContent } = useContext(CartContext);
  const [showingMore, setShowingMore] = useState(false);
  const [inCart, setInCart] = useState();

  useEffect(() => {
    if (
      cartContent.find((item) => item.title === product.title) !== undefined
    ) {
      setInCart(true);
      return;
    }
    setInCart(false);
  }, [product, cartContent]);

  const addHandler = () => {
    addItemToCart(product);
    setInCart(true);
  };
  const showToggleHandler = () => {
    setShowingMore((prev) => !prev);
  };
  return (
    <div className="w-full shadow-md shadow-gray-700/50 bg-white rounded-lg flex flex-col justify-between items-center">
      <span>
        <h1 className="m-3 text-xl">{formatDescription(product.title, 50)}</h1>
        <div className="w-full min-h-35 lg:min-h-45 flex flex-col justify-center max-h-56">
          <Image src={product.image} />
        </div>
      </span>
      <span>
        <p className="mt-1 p-2">
          {showingMore
            ? product.description
            : formatDescription(product.description)}
        </p>
        <p
          className={`cursor-pointer text-center text-gray-800 hover:bg-gray-100 rounded border-1 border-gray-400 w-1/2 mx-auto`}
          onClick={showToggleHandler}
        >
          {showingMore ? "Show less" : "Show More"}
        </p>
      </span>
      <span className="w-full mx-auto text-center">
        <h1 className="font-semibold text-3xl mt-3">${product.price}</h1>
        <p className="text-gray-500 text-center mb-1">{product.category}</p>
        {!inCart ? (
          <button
            onClick={addHandler}
            className="bg-violet-500 hover:shadow-md hover:shadow-violet-400/50 text-white rounded hover:bg-violet-600 hover:cursor-pointer h-8 py-1 px-2 mb-2"
          >
            add to cart
          </button>
        ) : (
          <button className="bg-gray-100 text-black rounded h-8 py-1 px-2 mb-2">
            already in cart
          </button>
        )}
      </span>
    </div>
  );
}

export default ProductCard;
