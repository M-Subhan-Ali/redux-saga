import { PRODUCT_DATA } from "./constants";

export const productData = ( data = [] , action ) => {

  switch( action.type ){
    case PRODUCT_DATA : 
    console.warn( "reducer productData called" , action )
    return [action.data]
    default : return data
  }

}