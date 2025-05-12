import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constants"
export const cartData = ( data=[] , action ) => {

  // if( action.type === "sADD_TO_CART" ){  
  
  //   console.warn( "reducer called" , action )

  //   return action.data
  // }else{
  //   return "no action called"
  // }

  switch ( action.type ){
    case ADD_TO_CART : 
    console.warn( "reducer Addcart called" , action )
    return [action.data , ...data];
    case REMOVE_FROM_CART : 
    console.warn( "reducer removecart called" , action )
    
    if( data.length === 0 ){
      return data 
    }

    return data.slice( 0 , -1 );
    case CLEAR_CART : 
    console.warn( "reducer clearcart called" , action )
    data = []
    
    return [...data]

    default : return data
  }

}