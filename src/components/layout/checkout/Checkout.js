import classes from "./Checkout.module.css";

import CheckoutForm from "./CheckoutForm";
import CartItem from "../../cart/CartItem";
import ContainerBig from "../../UI/container-big/ContainerBig";

import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems
  );
  const totalAmount = useSelector(
    (state) => state.CartFunctionalitySlice.totalAmount
  );
  return (
    <ContainerBig>
      <div className={classes["checkout-page"]}>
        <CheckoutForm />
        <div>
          <div className={classes["ordered-items"]}>
            {cartItems.map((product) => (
              <CartItem
                name={product.name}
                description={product.description}
                img={product.img}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
                id={product.id}
              />
            ))}
          </div>

          <div className={classes["added-info"]}>
            <div className={classes["added-info-subtotal-container"]}>
              <div className={classes["added-info-subtotal"]}>
                <span>Subtotal</span>
                <span>Shipping</span>
              </div>
              <div>
                <p>To be shared via email</p>
                <p>{totalAmount}$</p>
              </div>
            </div>
            <div className={classes["added-info-total"]}>
              <p>Total</p>
              <p>{totalAmount}$</p>
            </div>
          </div>
        </div>
      </div>
    </ContainerBig>
  );
};

export default Checkout;
