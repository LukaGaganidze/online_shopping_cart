import classes from "./ShopItemsAdditionalBackgfround.module.css";
import LoadingSpinner from "../../../assets/logo-n-svgs/svg/loading-spinner/LoadingSpinner";

const ShopItemsAdditionalBackground = (props) => {
  return (
    <div
      onClick={props.onCLoseCart}
      className={classes["weapon-additional-info-overlay"]}
    >
      <LoadingSpinner className={classes["loading-spinner"]} />
    </div>
  );
};

export default ShopItemsAdditionalBackground;
