import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart , clearCart, removeFromCart } from "../redux/action"

const HeroSection = () => {
  
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
    </div>
   </div>
  )
}

export default HeroSection
