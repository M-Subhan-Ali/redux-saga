import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart , clearCart, removeFromCart } from "../redux/action"
import { productList } from '../redux/productAction'
const HeroSection = () => {
  
  const data = useSelector((state)=>state.productData)

  useEffect(()=>{
    dispatch(productList())
  },[])
  
  console.warn("Redux data", data)
  const someData = {
    id:1,
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "cooking"],
  }
  const dispatch = useDispatch();
    
  return (
    <div className='grid justify-center items-center'>
    <h1 className='text-4xl text-red-600'>Hi! How R U🌹</h1>
    <div className="grid gap-6 ">
    <button onClick={()=>dispatch(addToCart(someData))} className='border border-gray-300 mr-2'>add to cart</button>
    <button onClick={()=>dispatch(removeFromCart(someData))} className='border border-gray-300 mr-2'>Remove from cart</button>
    <button onClick={()=>dispatch(clearCart())} className='border border-gray-300 mr-2'>clear Cart</button>
    <button onClick={()=>dispatch(productList())} className='border border-gray-300 mr-2'>Get Product List</button>
    </div>
    <div className='product-container'>

    </div>
   </div>
  )
}

export default HeroSection
