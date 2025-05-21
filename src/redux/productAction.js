import { PRODUCT_DATA } from "./constants";

export const productList = () => {
  // const data = "hello"
  // let data = await fetch("https://jsonplaceholder.typicode.com/todos");
  // data = await data.json();

  // console.warn("productData action called data says" , data);
  return{
    type : PRODUCT_DATA,
    data : "apple"
  }
}