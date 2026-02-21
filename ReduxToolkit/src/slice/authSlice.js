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
    },
    loginUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

export const { signupUser, loginUser } = authSlice.actions;
export default authSlice.reducer;
