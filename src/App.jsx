import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/action'
import Navbar from './components/Navbar'


function App() {
  const someData = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "cooking"],
  }
  const dispatch = useDispatch();
  return (
   <div>
    <Navbar/>
    <h1 className='text-4xl text-red-600'>Hi! How R U🌹</h1>
    <button onClick={()=>dispatch(addToCart(someData))}>add to cart</button>
   </div>
  )
}

export default App
