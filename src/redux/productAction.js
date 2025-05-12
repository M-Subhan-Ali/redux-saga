import { PRODUCT_DATA } from "./constants";

export const productData = () => {
  const data = "hello"
  console.warn("productData action called data says" , dara);
  return{
    type : PRODUCT_DATA,
    data
  }
}