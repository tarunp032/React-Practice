import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchData = createAsyncThunk(
  'product/fetch',
  async() => {
    const response = await axios.get("https://dummyjson.com/products")
    return response.data.products
  }
)
const productSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle', 
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; 
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; 
      });
  },
});

export default productSlice.reducer;