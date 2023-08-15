import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import ShopItemsAdditionalBackground from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalBackgfround";
import ShopItemsAdditionalInfo from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalInfo";

import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";

import classes from "./FormItemSmall.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

import ButtonAddSMALL from "../../../../UI/buttons/Button-Add-Small/ButtonAddSMALL";
import ButtonAddedSMALL from "../../../../UI/buttons/Button-ADDED-Small/ButtonAddedSMALL";

const ShoppingCartSmall = (props) => {
  const cartProducts = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const productIsInCart = cartProducts.some((el) => el.id === props.id);

  const dispatch = useDispatch();
  const addFormToCartHandler = () => {
    dispatch(
      cartFunctionalityActions.addItemTocart({
        name: props.name,
        description: props.description,
        img: props.img,
        price: props.price,
        quantity: props.quantity,
        id: props.id,
      })
    );
  };
  const removeFormFromCartHandler = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  const currItemIncart = cartProducts.find((item) => item.id === props.id);

  const [additionalInfo, setAdditionalinfo] = useState(false);
  const [activeAdditionalInfo, setActiveAditionalInfo] = useState(false);

  useEffect(() => {
    const delayedInfo = setTimeout(() => {
      setActiveAditionalInfo(additionalInfo);
    }, 1000);
    return () => clearTimeout(delayedInfo);
  }, [additionalInfo]);

  const openAdditionalInformationhandler = () => {
    setAdditionalinfo(true);
  };
  const closeAdditionalInformationhandler = () => {
    setAdditionalinfo(false);
  };
  const addQuantityHandler = () => {
    dispatch(cartFunctionalityActions.addQuantity(props.id));
  };
  const remQuantityHandler = () => {
    dispatch(cartFunctionalityActions.remQuantity(props.id));
  };

  return (
    <React.Fragment>
      {/* additional information blur */}
      {additionalInfo &&
        createPortal(
          <ShopItemsAdditionalBackground
            onCLoseCart={closeAdditionalInformationhandler}
          />,
          document.getElementById("additionalInfoBackground")
        )}

      {/* additional informaton itself */}
      {additionalInfo &&
        createPortal(
          <ShopItemsAdditionalInfo
            curItem={currItemIncart}
            addQuantity={addQuantityHandler}
            remQuantity={remQuantityHandler}
            onAddProductToCart={addFormToCartHandler}
            name={props.name}
            description={props.description}
            price={props.price}
            secondaryImgs={props.secondaryImgs}
            additionalInfo={props.additionalInfo}
            activeAdditionalInfo={activeAdditionalInfo}
          />,
          document.getElementById("additionalInfo")
        )}

      <ShoppingItemCard className={classes["form-shopping-item-small"]}>
        <img
          className={classes["form-img-S"]}
          onClick={openAdditionalInformationhandler}
          src={props.img}
        />
        <div className={classes["form-item-descriprion"]}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <span>{props.price.toFixed(2)}$</span>
        </div>
        {!productIsInCart && (
          <ButtonAddSMALL onAddItem={addFormToCartHandler} />
        )}
        {productIsInCart && (
          <ButtonAddedSMALL onRemoveItem={removeFormFromCartHandler} />
        )}
      </ShoppingItemCard>
    </React.Fragment>
  );
};

export default ShoppingCartSmall;
