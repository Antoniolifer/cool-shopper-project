import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";

function PriceFilter() {
  const {products, setPriceFilter} = useContext(CartContext);
  const [minPrice, setMinPrice] = useState(0);
  
  const [maxPrice, setMaxPrice] = useState(0);
  useEffect( () => {
    setMaxPrice(products.reduce( (acc, item) => acc > item.price ? acc : item.price,0)); 
  },[products])
  const minHandler = (e) => {
    setMinPrice(e.target.value);
  }
  const maxHandler = (e) => {
    setMaxPrice(e.target.value);
  } 
  const minBlurHandler = () => {
    let max; 
    console.log(maxPrice, minPrice);
    if(+maxPrice < +minPrice){
      max = Number(minPrice) + 1;
      setMaxPrice(max);
    }
    setPriceFilter({maxPrice: (max ? max : maxPrice), minPrice});
  }
  const maxBlurHandler = () => {
    let min; 
    if(+minPrice > +maxPrice){
      min = Number(maxPrice) - 1;
      setMinPrice(min);
    }
    setPriceFilter({minPrice: (min ? min : minPrice), maxPrice});
  }
  return (
    <>
        <label><i>Price Range</i></label><br/>
        <div className="w-full flex md:flex-col lg:flex-row justify-center">
        
        <label htmlFor="minPrice">from:
          <input type="number" name="minPrice" min="0" max={10000} value={minPrice} onChange={minHandler} onBlur={minBlurHandler} step={10} 
            className="bg-white w-14 focus:shadow-lg focus:shadow-violet-400/50 "/>
        </label>
        

        <label htmlFor="maxPrice">to:
            <input type="number" name="maxPrice" min={1} value={maxPrice} max={10000} onChange={maxHandler} onBlur={maxBlurHandler} step={10} 
              className="bg-white w-14 focus:shadow-lg focus:shadow-violet-400/50" />
        </label>
        
          </div>
    </>
  )
}

export default PriceFilter