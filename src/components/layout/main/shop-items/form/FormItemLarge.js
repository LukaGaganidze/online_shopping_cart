import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import classes from "./FormItemLarge.module.css";

import ShopItemsAdditionalInfo from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalInfo";
import ShopItemsAdditionalBackground from "../../../../UI/ShopItemsAdditionalInfo/ShopItemsAdditionalBackgfround";
import ShoppingItemCard from "../../../../UI/ShoppingItemCard/ShoppingItemCard";
import ButtonAddLARGE from "../../../../UI/buttons/Button-Large-Add/ButtonAddLARGE";
import ButtonAddedLarge from "../../../../UI/buttons/Button-ADDED-Large/ButtonAddedLARGE";

import { useDispatch, useSelector } from "react-redux";
import { cartFunctionalityActions } from "../../../../../store/CartFunctionality-slice";

const FormItemLarge = (props) => {
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

  const removeFormCartHandler = () => {
    dispatch(cartFunctionalityActions.removeItemFromCart(props.id));
  };

  const cartProducts = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const productIsInCart = cartProducts.some((el) => el.id === props.id);

  // for additional information
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
      <ShoppingItemCard className={classes["individual-form-product-large"]}>
        <img
          onClick={openAdditionalInformationhandler}
          src={props.img}
          className={classes["form-img-large"]}
        />

        <div className={classes["form-info-large"]}>
          <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
          </div>

          <div>
            <span>261.00$</span>
            {!productIsInCart && (
              <ButtonAddLARGE onAddItem={addFormToCartHandler} />
            )}
            {productIsInCart && (
              <ButtonAddedLarge onRemoveItem={removeFormCartHandler} />
            )}
          </div>
        </div>
      </ShoppingItemCard>
    </React.Fragment>
  );
};

export default FormItemLarge;
