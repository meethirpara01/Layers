import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MobileSkinProduct: [],          // all products
  brand: "",             // selected brand
  model: "",             // selected model
  filteredProducts: []   // filtered products
};

const MobileSkinProductSlice = createSlice({
  name: "MobileSkinProduct",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.MobileSkinProduct = action.payload;
    },
    setSelection: (state, action) => {
      const { brand, model } = action.payload;
      state.brand = brand;
      state.model = model;
      // filter directly
      state.filteredProducts = state.MobileSkinProduct.filter(
        (item) => item.brand === brand && item.model === model
      );
    }
  }
});

export const { setAllProducts, setSelection } = MobileSkinProductSlice.actions;
export default MobileSkinProductSlice.reducer;
