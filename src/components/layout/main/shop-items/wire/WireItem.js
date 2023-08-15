import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import classes from "./WireItem.module.css";

import ShopItemsAdditionalBackground from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalBackgfround";
import ShopItemsAdditionalInfo from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalInfo";

import ButtonAddLARGE from "../../../../UI/buttons/Button-Large-Add/ButtonAddLARGE";
import ButtonAddedLARGE from "../../../../UI/buttons/Button-ADDED-Large/ButtonAddedLARGE";
import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const WireItem = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const itemIsInAdded = cartItems.some((el) => el.id === props.id);

  const addWireProductToCartHandler = () => {
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
  const removeWireProductFromCartHandler = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  // for additional info
  const currItemIncart = cartItems.find((item) => item.id === props.id);
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
      {/* additional info blur */}
      {additionalInfo &&
        createPortal(
          <ShopItemsAdditionalBackground
            onCLoseCart={closeAdditionalInformationhandler}
          />,
          document.getElementById("additionalInfoBackground")
        )}

      {/* additional info utself */}
      {additionalInfo &&
        createPortal(
          <ShopItemsAdditionalInfo
            curItem={currItemIncart}
            addQuantity={addQuantityHandler}
            remQuantity={remQuantityHandler}
            onAddProductToCart={addWireProductToCartHandler}
            name={props.name}
            description={props.description}
            price={props.price}
            secondaryImgs={props.secondaryImgs}
            additionalInfo={props.additionalInfo}
            activeAdditionalInfo={activeAdditionalInfo}
          />,
          document.getElementById("additionalInfo")
        )}
      <ShoppingItemCard className={classes["individual-wire-product"]}>
        <div className={classes["wire-img-container"]}>
          <img
            onClick={openAdditionalInformationhandler}
            src={props.img}
            className={classes["wire-img"]}
          />
        </div>
        <div className={classes["wire-text"]}>
          <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <span>{props.price.toFixed(2)}$</span>
          </div>

          {itemIsInAdded && (
            <ButtonAddedLARGE
              onRemoveItem={removeWireProductFromCartHandler}
              className={classes["wire-button"]}
            />
          )}
          {!itemIsInAdded && (
            <ButtonAddLARGE
              onAddItem={addWireProductToCartHandler}
              className={classes["wire-button"]}
            />
          )}
        </div>
      </ShoppingItemCard>
    </React.Fragment>
  );
};

export default WireItem;
