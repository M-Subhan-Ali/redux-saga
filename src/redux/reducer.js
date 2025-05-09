import { ADD_TO_CART } from "./constants"
export const cartData = ( data=[] , action ) => {

  // if( action.type === "sADD_TO_CART" ){  
  
  //   console.warn( "reducer called" , action )

  //   return action.data
  // }else{
  //   return "no action called"
  // }

  switch ( action.type ){
    case ADD_TO_CART : 
    console.warn( "reducer called" , action )
    return [action.data , ...data];
    default : return data
  }

}