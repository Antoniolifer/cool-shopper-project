import './App.css'
import ShopPage from './pages/ShopPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import { CartContext } from './context/CartContext'

import { useState } from 'react'

function App() {
  const [cartContent, setCartContent] = useState([]);
  const [products, setProducts] = useState([])
  const [categoryMap, setCategoryMap] = useState([{category: 'blank', selected: false}]);
  const [priceFilter, setPriceFilter] = useState( {minPrice: -1, maxPrice: -1})
  //price-desc, price-asc, date-desc, date-asc, name-desc, name-asc, default none
  const [sortType, setSortType] = useState('none');
  const [search, setSearch] = useState('');


  const addItemToCart = (item) => {
    setCartContent([...cartContent, item]);
  }
  const clearCart = () => {
    setCartContent([]);
  }
  const deleteCartItem = (item) => {
    setCartContent( cartContent.filter( product => product.title !== item.title) )
  }
  return (
    <div className='bg-gray-100 h-screen flex flex-col justify-between'>
    <CartContext.Provider value={
            {cartContent, addItemToCart, clearCart, deleteCartItem,
             products, setProducts,
             categoryMap,setCategoryMap,
             priceFilter,setPriceFilter, 
             sortType, setSortType,
            search, setSearch}
    }>
      <Navbar /> 
      {/* <Filters /> */}

      <ShopPage />
      <Footer /> 
      <ScrollToTopButton/>
    </CartContext.Provider>
    </div>
  )
}

export default App
