import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants"                                            //In Redux, actions are plain JavaScript objects that describe what happened
export const addToCart = ( data ) => {   //action called everytime
  console.warn("addToCart action called" , data)
  return {
    type: ADD_TO_CART,
    data
  }
}                                           

export const removeFromCart = ( data ) => {
  console.warn("removeFromCart action called" , data)
 return {
  type : REMOVE_FROM_CART,
  data
 }
}