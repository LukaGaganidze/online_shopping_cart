import { createSlice } from "@reduxjs/toolkit";

const cartUIInitialVal = {
  showCart: false,
  showBlur: false,
  formIsSubmited: false,
};

const cartUiSlice = createSlice({
  name: "cartUI",
  reducers: {
    opanCart(state) {
      state.showCart = true;
    },
    showBlur(state) {
      state.showBlur = true;
    },
    closeCart(state) {
      state.showCart = false;
    },
    closeBlur(state) {
      state.showBlur = false;
    },
    cartSubmitted(state) {
      state.formIsSubmited = true;
    },
    cartRefreshSubmit(state) {
      state.formIsSubmited = false;
    },
  },
  initialState: cartUIInitialVal,
});

export const cartUIActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
