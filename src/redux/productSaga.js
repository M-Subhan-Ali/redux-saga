import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_DATA, SET_PRODUCT_DATA } from "./constants";   //yield = await

function* getProduct(){
  let data = yield fetch("https://jsonplaceholder.typicode.com/todos");
  data = yield data.json();
 yield put({type:SET_PRODUCT_DATA,data})   // use PUT  store data into another reducer 
  // console.warn("getProduct saga called",data);
}

function* productSaga () {           //generator function for async data
 yield takeEvery(PRODUCT_DATA,getProduct)
}

export default productSaga;