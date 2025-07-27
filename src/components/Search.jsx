import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Search() {
  const { search, setSearch } = useContext(CartContext);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="grow-2 ml-4 lg:text-center">
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder="Search..."
        className=" w-full md:w-1/2 text-lg border-2 border-gray-400 bg-white rounded p-2 focus:shadow-lg focus:shadow-violet-400/50"
      />
    </div>
  );
}

export default Search;
