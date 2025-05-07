import { ADD_TO_CART } from "./constants"
export const cartData = ( data=[] , action ) => {
  if( action.type === ADD_TO_CART ){  
    console.warn(action,"reducer called")
    return action.data
  }else{
    return "abc"
  }

}