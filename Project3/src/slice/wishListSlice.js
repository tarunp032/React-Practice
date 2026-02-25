import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const exist = state.wishListItems.find(
        (item) => item.id === action.payload.id
      );

      if (!exist) {
        state.wishListItems.push(action.payload);
      }
    },

    removeFromWishList: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishList, removeFromWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;