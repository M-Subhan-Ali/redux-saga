// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootReducer";

// const store = createStore(rootreducer)
const store = configureStore({reducer : rootreducer})

export default store;