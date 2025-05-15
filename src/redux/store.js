// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./productSaga";

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootreducer)
const store = configureStore({
  reducer: rootreducer,
  middleware: () => [ sagaMiddleware ],
});

sagaMiddleware.run(productSaga)

export default store;
