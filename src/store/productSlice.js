import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    clearProducts: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, clearProducts } = productSlice.actions;
export default productSlice.reducer;
