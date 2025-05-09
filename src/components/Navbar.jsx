import React from 'react'
import Cart from "../assets/shopping-cart.png"
import { useSelector } from 'react-redux'
import { cartData } from '../redux/reducer'


const Navbar = () => {
  const Cart_Length_Data = useSelector((state)=>state.cartData)
  console.log("Redux data", Cart_Length_Data)
  return (
    <div className='bg-yellow-300 py-2 px-2'>
      <div className='flex justify-between items-center py-5'>
        <h1 className='font-semibold italic'>Shopping Center</h1>
       <div className='cart_icon relative'>
        <span className='absolute top-[-50%] right-[0%] bg-red-600 flex items-center justify-center  text-white w-2 h-2 rounded-full p-2'>{Cart_Length_Data.length}</span>
        <img src={Cart} alt="Cart" className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
