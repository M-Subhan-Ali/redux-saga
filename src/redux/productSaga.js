import { takeEvery } from "redux-saga/effects";
import { PRODUCT_DATA } from "./constants";

function* getProduct(){
  console.warn("getProduct saga called");
}

function* productSaga () {           //generator function for async data
 yield takeEvery(PRODUCT_DATA,getProduct)
}

export default productSaga;