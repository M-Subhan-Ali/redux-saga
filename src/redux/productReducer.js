import { PRODUCT_DATA, SET_PRODUCT_DATA } from "./constants";

export const productData = ( data = [] , action ) => {

  switch( action.type ){
    case SET_PRODUCT_DATA : 
    console.warn( "reducer Set_productData called" , action )
    return [...action.data]
    default : return data
  }

}