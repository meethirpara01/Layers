import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  WatchProduct: [],          // all products
};

const WatchProductSlice = createSlice({
  name: "WatchProduct",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.WatchProduct = action.payload;
    },
  }
});

export const { setAllProducts } = WatchProductSlice.actions;
export default WatchProductSlice.reducer;
