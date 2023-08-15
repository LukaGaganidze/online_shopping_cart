import { configureStore } from "@reduxjs/toolkit";

import CartUiClice from "./CartUi-clice";
import CartFunctionalitySlice from "./CartFunctionality-slice";
import MenuUISlice from "./MenuUI-slice";

const store = configureStore({
  reducer: {
    CartUiClice,
    CartFunctionalitySlice,
    MenuUISlice,
  },
});

export default store;
