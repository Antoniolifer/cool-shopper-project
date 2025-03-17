import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext";
import FilterCheckBox from "./FilterCheckBox";
import PriceFilter from "./PriceFilter";
function Filters() {

  const {products, categoryMap,setCategoryMap} = useContext(CartContext);
  
  //create categories for the filter checkboxes
  useEffect(() => {
    const uniqueCatList = Array.from(new Set(products.map(item => item.category)));

    setCategoryMap(uniqueCatList.map(product => {
      return {category :product, selected : false};
    }))
  },[products,setCategoryMap]);

  const toggleBox = (category) => {
    setCategoryMap(prev => {
      return prev.map(cat => cat.category === category ? {category : cat.category, selected: !cat.selected} : cat)
    })
  }

  return (
    <div className="top-12 mb-4 md:top-24 md:left-3 mx-auto p-2 m-2 w-4/5 md:w-1/7 bg-gray-200 relative md:fixed border-2 border-gray-500 rounded-lg">
        <h1 className="text-lg underline tracking-wide">Filters</h1>
        {/* category, price, */}
        <div>
            <PriceFilter />

            <label><i>Category</i></label><br/>
            <div className="flex flex-wrap mx-auto md:mx-0 gap-y-2  justify-center md:block">
            {categoryMap.map( cat => {
              return(
                <FilterCheckBox key={cat.category} category={cat.category} checked={cat.selected} toggleBox={toggleBox}/>
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Filters


