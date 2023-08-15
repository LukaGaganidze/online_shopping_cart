import classes from "./cartQuantity.module.css";

const CartQuantity = (props) => {
  return (
    <div className={`${classes["cart-item-quantity"]} ${props.className}`}>
      <span onClick={props.onRemoveItem}>-</span>
      <span>{props.quantity}</span>
      <span onClick={props.onAddItem}>+</span>
    </div>
  );
};

export default CartQuantity;
