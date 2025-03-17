import { useContext, useState } from "react"
import { CartContext } from '../context/CartContext';
import Search from "./Search";
function ControlBar() {
    const {setSortType} = useContext(CartContext);
    const [selectedOption, setSelectedOption] = useState('none');

    const handleSelection = (e) => {
        setSelectedOption(e.target.value);
        setSortType(e.target.value);
    }
    return (
        <div className="mx-auto mb-4  mt-16 md:mt-6 flex justify-between relative w-3/4">
            <Search/>
            <select 
            name="sorting" 
            value={selectedOption}
            onChange={handleSelection}
            id="item-sorting" 
            className=" w-1/2 md:w-3/10 lg:w-1/5 shadow-sm md:absolute right-0 bottom-0 shadow-gray-500/50 p-1 text-md bg-white rounded-sm mr-6">
            <option value="none">Sort products</option>
            <option value="price-asc">Price (low to high)</option>
            <option value="price-desc">Price (high to low)</option>
            <option value="name-asc">Name (A to Z)</option>
            <option value="name-desc">Name (Z to A)</option>
            {/* <option value="sale">Sale</option> */}

            {/* <option value="date-asc">Date added (old to new)</option>
            <option value="date-desc">Date added (new to old)</option> */}
            </select>
        </div>

    )
}

export default ControlBar;