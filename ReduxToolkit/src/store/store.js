import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import authReducer from "../slice/authSlice"
import productReducer from "../slice/productSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer, 
    data: productReducer,
  },
});
