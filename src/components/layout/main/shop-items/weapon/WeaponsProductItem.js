import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import classes from "./WeaponsProductItem.module.css";

import ShopItemsAdditionalInfo from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalInfo";
import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";
import ButtonAddLARGE from "../../../../UI/buttons/Button-Large-Add/ButtonAddLARGE";
import ButtonAddedLARGE from "../../../../UI/buttons/Button-ADDED-Large/ButtonAddedLARGE";
import ShopItemsAdditionalBackground from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalBackgfround";
// import CartQuantity from "../../../../functionalComponenets/cartQuantity";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const WeaponsProductItem = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );

  const itemIsInAdded = cartItems.some((el) => el.id === props.id);
  const addWeaponProductToCart = () => {
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
  const removeWeaponProductFromCart = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  // for additional information
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
    <ShoppingItemCard className={classes["individual-weapon-product"]}>
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
            onAddProductToCart={addWeaponProductToCart}
            secondaryImgs={props.secondaryImgs}
            name={props.name}
            description={props.description}
            price={props.price}
            additionalInfo={props.additionalInfo}
            activeAdditionalInfo={activeAdditionalInfo}
          />,
          document.getElementById("additionalInfo")
        )}
      <img
        onClick={openAdditionalInformationhandler}
        src={props.img}
        className={classes["weapon-img"]}
      />
      <div className={classes["weapon-info"]}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <span>{props.price}$</span>
        </div>
        {itemIsInAdded && (
          <ButtonAddedLARGE
            onRemoveItem={removeWeaponProductFromCart}
            className={classes["weapon-button"]}
          />
        )}
        {!itemIsInAdded && (
          <ButtonAddLARGE
            onAddItem={addWeaponProductToCart}
            className={classes["weapon-button"]}
          />
        )}
      </div>
    </ShoppingItemCard>
  );
};

export default WeaponsProductItem;
