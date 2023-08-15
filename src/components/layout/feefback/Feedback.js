import classes from "./Feedback.module.css";
import { useDispatch } from "react-redux";

import ContainerBig from "../../UI/container-big/ContainerBig";

import { cartFunctionalityActions } from "../../../store/CartFunctionality-slice";
import { cartUIActions } from "../../../store/CartUi-clice";
import { Link } from "react-router-dom";

const Feedback = () => {
  const dispatcher = useDispatch();

  const useConfirmationHAndler = () => {
    dispatcher(cartFunctionalityActions.clearStore());
    dispatcher(cartUIActions.cartRefreshSubmit());
  };
  return (
    <ContainerBig>
      <div className={classes["feedback-cotainer"]}>
        <h1> Order Received</h1>
        <p className={classes["feedback-first-p"]}>
          Thank you for choosing manifest FNCG for your fencing equipment.
        </p>
        <p className={classes["feedback-sec-p"]}>
          We will send you an email with the payment link (including shipping
          cost).
        </p>
        <button
          className={classes["user-confirm-btn"]}
          onClick={useConfirmationHAndler}
        >
          <Link className={classes["user-confirm-a"]} to="/">
            Explore more →
          </Link>
        </button>
      </div>
    </ContainerBig>
  );
};

export default Feedback;
