import { createSlice } from "@reduxjs/toolkit";

const defaultSliceVal = {
  cartItems: [],
  totalAmount: 0,
};

const cartFuntionalitySlice = createSlice({
  name: "cartFunctionality",
  reducers: {
    addItemTocart(state, actions) {
      state.cartItems.push(actions.payload);
      const updatedTotalAmount = state.cartItems.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price;
      }, 0);

      state.totalAmount = updatedTotalAmount;
    },
    removeItemFromCart(state, actions) {
      const filteredItems = state.cartItems.filter(
        (product) => product.id !== actions.payload
      );
      const updatedTotalAmount = filteredItems.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price;
      }, 0);

      state.cartItems = filteredItems;
      state.totalAmount = updatedTotalAmount;
    },
    addQuantity(state, actions) {
      const currentProduct = state.cartItems.find(
        (el) => el.id === actions.payload
      );
      currentProduct.quantity++;
      state.totalAmount = state.totalAmount + +currentProduct.price;
    },
    remQuantity(state, actions) {
      const currentProduct = state.cartItems.find(
        (el) => el.id === actions.payload
      );
      const filteredState = state.cartItems.filter(
        (el) => el.id !== actions.payload
      );
      currentProduct.quantity--;
      state.totalAmount = state.totalAmount - +currentProduct.price;

      if (currentProduct.quantity === 0) {
        state.cartItems = filteredState;
      }
    },
    replaceItems(state, actions) {
      state.cartItems = actions.payload.cartItems;
      state.totalAmount = actions.payload.totalAmount;
    },
    clearStore(state) {
      state.cartItems = defaultSliceVal.cartItems;
      state.totalAmount = defaultSliceVal.totalAmount;
    },
  },
  initialState: defaultSliceVal,
});

export const cartFunctionalityActions = cartFuntionalitySlice.actions;

export default cartFuntionalitySlice.reducer;
