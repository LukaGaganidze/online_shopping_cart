import React from "react";
import { useState, useEffect } from "react";

import classes from "./MaskItems.module.css";

import ShopItemsAdditionalBackground from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalBackgfround";
import ShopItemsAdditionalInfo from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalInfo";
import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";
import ButtonAddSMALL from "../../../../UI/buttons/Button-Add-Small/ButtonAddSMALL";
import ButtonAddedSMALL from "../../../../UI/buttons/Button-ADDED-Small/ButtonAddedSMALL";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const MaskItems = (props) => {
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [activeAdditionalInfo, setActiveAditionalInfo] = useState(false);

  useEffect(() => {
    const delayedInfo = setTimeout(() => {
      setActiveAditionalInfo(additionalInfo);
    }, 1000);
    return () => clearTimeout(delayedInfo);
  }, [additionalInfo]);

  const cartProducts = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );

  const ProductIsInCart = cartProducts.some((el) => el.id === props.id);
  const dispatch = useDispatch();

  const addMaskProductToCart = () => {
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
  const removeMaskProductFromCart = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  const currItemIncart = cartProducts.find((item) => item.id === props.id);

  const addQuantityHandler = () => {
    dispatch(cartFunctionalityActions.addQuantity(props.id));
  };
  const remQuantityHandler = () => {
    dispatch(cartFunctionalityActions.remQuantity(props.id));
  };

  const openAdditionalInfoHandler = () => {
    setAdditionalInfo(true);
  };
  const closeAdditionalInfoHandler = () => {
    setAdditionalInfo(false);
  };

  return (
    <React.Fragment>
      {additionalInfo && (
        <ShopItemsAdditionalBackground
          onCLoseCart={closeAdditionalInfoHandler}
        />
      )}

      {additionalInfo && (
        <ShopItemsAdditionalInfo
          curItem={currItemIncart}
          addQuantity={addQuantityHandler}
          remQuantity={remQuantityHandler}
          onAddProductToCart={addMaskProductToCart}
          secondaryImgs={props.secondaryImgs}
          name={props.name}
          description={props.description}
          price={props.price}
          additionalInfo={props.additionalInfo}
          activeAdditionalInfo={activeAdditionalInfo}
        />
      )}

      <ShoppingItemCard className={classes["mask-shopping-item"]}>
        <img
          onClick={openAdditionalInfoHandler}
          className={classes["mask-image"]}
          src={props.img}
        />
        <div className={classes["mask-item-descriprion"]}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <span>{props.price.toFixed(2)}$</span>
        </div>
        {!ProductIsInCart && (
          <ButtonAddSMALL onAddItem={addMaskProductToCart} />
        )}
        {ProductIsInCart && (
          <ButtonAddedSMALL onRemoveItem={removeMaskProductFromCart} />
        )}
      </ShoppingItemCard>
    </React.Fragment>
  );
};

export default MaskItems;
