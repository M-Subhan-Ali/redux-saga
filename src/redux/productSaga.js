import { takeEvery } from "redux-saga/effects";

function* productSaga () {           //generator function for async data
 yield takeEvery("GET_PRODUCT")
}

export default productSaga;