import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import productSlice from "../slice/productSlice"
import cartSlice from '../slice/cartSlice'
import wishlist from '../slice/wishListSlice'
export const store = configureStore({
  reducer: {
    auth: authSlice,
    data: productSlice,
    cart: cartSlice,
    wishlist: wishlist,
  },
});
