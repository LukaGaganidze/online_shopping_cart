import React, { useEffect } from "react";
import classes from "./App.module.css";

import Header from "./components/layout/header/Header";
import MainContent from "./components/layout/main/MainContent";
import About from "./components/layout/about/About";
import Feedback from "./components/layout/feefback/Feedback";
import Footer from "./components/layout/footer/Footer";
import More from "./components/layout/more/More";

import Cart from "./components/cart/Cart";
import CartBlur from "./components/cart/CartBlur";
import Menu from "./components/menu/Menu";
import Checkout from "./components/layout/checkout/Checkout";
import BackgroundBlur from "./components/UI/blur/BackgroundBlur";

import { useDispatch, useSelector } from "react-redux";

import {
  sendDataToServer,
  getDataFromServer,
} from "./store/cart-actions/CartActions";

import { menuUIActions } from "./store/MenuUI-slice";

import { Route, Routes } from "react-router-dom";

function App() {
  // application states (REDUX)
  const blurState = useSelector((state) => state.CartUiClice.showBlur);
  const cart = useSelector((state) => state.CartFunctionalitySlice);
  const menuIncative = useSelector((state) => state.MenuUISlice.menuIsOpen);
  const dispatcher = useDispatch();

  // sending and getting cart data
  useEffect(() => {
    dispatcher(getDataFromServer());
  }, [dispatcher]);

  useEffect(() => {
    dispatcher(sendDataToServer(cart));
  }, [cart, dispatcher]);

  // menu

  const closeMenu = () => {
    dispatcher(menuUIActions.closeMenu());
  };

  return (
    <React.Fragment>
      {/* #FFF HEADER MENU AND CART */}
      <Header />
      <Menu menuState={menuIncative} />
      <div className={classes["app-container"]}>
        <Cart />
        {blurState && <CartBlur />}
      </div>

      {/*#7FFF00 ROUTER ROUTES */}
      <Routes>
        <Route
          path="/"
          element={
            <BackgroundBlur close={closeMenu} menuState={menuIncative}>
              <MainContent />
            </BackgroundBlur>
          }
        />

        <Route
          path="/about"
          element={
            <BackgroundBlur close={closeMenu} menuState={menuIncative}>
              <About />
            </BackgroundBlur>
          }
        />

        <Route
          path="/checkout"
          element={
            <BackgroundBlur close={closeMenu} menuState={menuIncative}>
              <Checkout />
            </BackgroundBlur>
          }
        />
        <Route
          path="/feedback"
          element={
            <BackgroundBlur close={closeMenu} menuState={menuIncative}>
              <Feedback />
            </BackgroundBlur>
          }
        />
        <Route
          path="/more"
          element={
            <BackgroundBlur close={closeMenu} menuState={menuIncative}>
              <More />
            </BackgroundBlur>
          }
        />
      </Routes>

      {/* #FFF FOOTER */}

      <BackgroundBlur close={closeMenu} menuState={menuIncative}>
        <Footer />
      </BackgroundBlur>
    </React.Fragment>
  );
}

export default App;
