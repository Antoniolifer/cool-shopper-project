function FilterCheckBox({category, checked, toggleBox}){

  const handleToggle = () => {
    toggleBox(category);
  }
  return(
    <div onClick={handleToggle} className="inline-block md:block md:w-full hover:font-bold hover:cursor-pointer md:my-1 mx-1 hover:text-violet-600">
    <input type="checkbox" name={category} id="" readOnly className="mr-1 mt-1 accent-violet-600 hover:cursor-pointer" checked={checked}/>
    <label htmlFor={category} className="hover:cursor-pointer">{category}</label><br/>
    </div>
  )
}

export default FilterCheckBox;