import { createSlice } from "@reduxjs/toolkit";

const initialVal = {
  menuIsOpen: false,
};

const menuUISlice = createSlice({
  name: "menu-ui-slice",
  reducers: {
    openMenu(state) {
      state.menuIsOpen = true;
    },
    closeMenu(state) {
      state.menuIsOpen = false;
    },
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
  },
  initialState: initialVal,
});

export const menuUIActions = menuUISlice.actions;
export default menuUISlice.reducer;
