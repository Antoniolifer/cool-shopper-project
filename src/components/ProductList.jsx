import { useEffect, useContext, useState, useCallback,useMemo, useDeferredValue } from "react"

import Loader from "./Loader";
import ProductCard from './ProductCard';
import { CartContext } from "../context/CartContext";
//reset to original works when one category is selected. odd.
function ProductList() {
    const {products,setProducts, 
            categoryMap, 
            sortType, 
            priceFilter, 
            search } = useContext(CartContext);
    const [isFiltering, setIsFiltering] = useState(false);
    const [catFiltering, setCatFiltering] = useState(false);
    
    const [isLoading, setIsLoading] = useState(true);
    const deferredSearch = useDeferredValue(search);
    useEffect( () => {
        // fetch('https://fakestoreapi.com/products')
        // fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=46')
        const fetchData = async () => {
            await fetch("https://fakestoreapi.in/api/products?limit=150")
            .then(res=>res.json())
            .then(data => setProducts(data.products))
            setIsLoading(false);
        }
        fetchData();
    },[setProducts])
    
    useEffect(  () => {
        for(let i = 0; i < categoryMap.length; i++){
            if(categoryMap[i].selected === true){
                setIsFiltering(true);
                setCatFiltering(true);
                return;
            }
        }
        setCatFiltering(false);

        if(priceFilter.minPrice > 0 || priceFilter.maxPrice > 0){
            setIsFiltering(true);
            return;
        }
        if(deferredSearch !== ''){
            setIsFiltering(true);
            return;
        }
        setIsFiltering(false);
    }, [categoryMap, priceFilter, deferredSearch]);
    
    const filterCallback = useCallback((item) =>{
        if(priceFilter.minPrice > 0){
            if(item.price < priceFilter.minPrice){
                return false;
            }
        }
        if(priceFilter.maxPrice > 0){
            if(item.price > priceFilter.maxPrice){
                return false;
            }
        }
        if(!deferredSearch.toLowerCase().split(' ').every(word => item.title.toLowerCase().includes(word))){
            return false;
        }
        
        if(catFiltering){
            const cat = categoryMap.find(x => x.category === item.category);
            if(cat === undefined){return false};
            return cat.selected === true;
        }
        return true;   
    },[priceFilter, catFiltering, categoryMap, deferredSearch]);

    const sortFunction = useCallback( (sortType) => {
        switch(sortType){
            case('none'):{

                return () => 0;
            }
            case('price-desc'):{
                return (a,b) => b.price - a.price;
            }
            case('price-asc'):{
                return (a,b) => a.price - b.price;
            }
            case('name-desc'):{
                return (a,b) => b.title.trim().localeCompare(a.title.trim(), undefined, { numeric: true })
            }
            case('name-asc'):{
                return (a,b) => a.title.trim().localeCompare(b.title.trim(), undefined, { numeric: true })
            }
            
        }
    },[]);

    const preparedProducts = useMemo( () => [...(isFiltering ? products.filter(filterCallback) : products)].sort(sortFunction(sortType)).map( product => {
        return <ProductCard key ={product.id} product={product}/>
    }),[filterCallback, isFiltering, products, sortFunction, sortType])
    
    
    if(isLoading){
        return <Loader /> 
    }
    return (
        // <div className="container items-center md:items-stretch flex flex-col md:flex-row flex-wrap gap-4 md:w-8/10 lg:w-9/10 xl:w-9/10 mx-auto justify-center my-2">
        preparedProducts.length === 0 ? <p className="text-center mt-16">Unfortunately, no products match your search criteria.</p>
            : 
        <div className="container grid md:px-10 lg:px-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-7/10 md:w-8/10 lg:w-7/10 xl:w-9/12 mx-auto my-2">
            {preparedProducts}
        </div>
        
    )
}

export default ProductList