import classes from "./ShopItemsAdditionalInfo.module.css";
import CartQuantity from "../../functionalComponenets/cartQuantity";
import ButtonAddLARGE from "../../UI/buttons/Button-Large-Add/ButtonAddLARGE";

const ShopItemsAdditionalInfo = (props) => {
  console.log(props);
  return (
    <div
      className={`${classes["additional-info-content-container"]} ${
        props.activeAdditionalInfo ? classes["active-info"] : ""
      }`}
    >
      <div className={classes["images-div"]}>
        {props.secondaryImgs.map((img) => (
          <img key={img} className={classes["additional-pic"]} src={img} />
        ))}
      </div>
      <div>
        <div className={classes["information-div"]}>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <p>{props.price.toFixed(2)}$</p>
          <p>{props.additionalInfo}</p>
        </div>

        <div className={classes["popup-actions"]}>
          {props.curItem ? (
            <p className={classes["popup-actions-header"]}>
              Item is added to the cart
            </p>
          ) : (
            <p className={classes["popup-actions-header"]}>Add To Cart</p>
          )}
          {props.curItem ? (
            <CartQuantity
              className={classes["popup-controller-price"]}
              onAddItem={props.addQuantity}
              onRemoveItem={props.remQuantity}
              quantity={props.curItem ? props.curItem.quantity : 0}
            />
          ) : (
            <ButtonAddLARGE
              onAddItem={props.onAddProductToCart}
              className={`${classes["weapon-button"]} ${classes["weapon-button-poppup"]}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopItemsAdditionalInfo;
