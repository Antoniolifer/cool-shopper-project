function FilterCheckBox({category, checked, toggleBox}){

  const handleToggle = () => {
    toggleBox(category);
  }
  return(
    <div onClick={handleToggle} className="hover:font-bold hover:cursor-pointer p-1 mx-1 hover:text-violet-600">
    <input type="checkbox" name={category} id="" onChange={()=> ''} className="mr-1 mt-1 accent-violet-600 hover:cursor-pointer" checked={checked}/>
    <label htmlFor={category} className="hover:cursor-pointer">{category}</label><br/>
    </div>
  )
}

export default FilterCheckBox;