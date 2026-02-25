import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupUser: (state, action) => {
      state.users.push(action.payload);
      state.currentUser = action.payload; 
    },
    logoutUser: (state) => {
      state.currentUser = null;
    }
  }
});

export const { signupUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;