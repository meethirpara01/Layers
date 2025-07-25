import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LeptopSkinProduct: [],          // all products
  brand: "",             // selected brand
  model: "",             // selected model
  filteredProducts: []   // filtered products
};

const LeptopSkinProductSlice = createSlice({
  name: "LeptopSkinProduct",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.LeptopSkinProduct = action.payload;
    },
    setSelection: (state, action) => {
      const { brand, model } = action.payload;
      state.brand = brand;
      state.model = model;
      // filter directly
      state.filteredProducts = state.LeptopSkinProduct.filter(
        (item) => item.brand === brand && item.model === model
      );
    }
  }
});

export const { setAllProducts, setSelection } = LeptopSkinProductSlice.actions;
export default LeptopSkinProductSlice.reducer;
