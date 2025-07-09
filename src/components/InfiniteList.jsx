import { useState } from "react"


function InfiniteList({products}) {

  const [maxItems, setMaxItems] = useState(12);
  const clickHandler = () => {
    setMaxItems( (prev) => prev + 12)
  }
  return (
    <div className="container grid md:px-10 lg:px-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-7/10 md:w-8/10 lg:w-7/10 xl:w-9/12 mx-auto my-2">
        {products.slice(0, maxItems)}
        {maxItems >= products.length-1 ? <div></div>: <button onClick={clickHandler} className="col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-2 xl:col-span-2 xl:col-start-2  bg-violet-500 hover:shadow-md hover:shadow-violet-400/50 text-white rounded hover:bg-violet-600 hover:cursor-pointer h-16 text-xl font-semibold py-1 px-2 mt-4 mb-2">load more</button>}

      </div>
  )
}

export default InfiniteList