import React, { useState } from "react";

import classes from "./CheckoutForm.module.css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUIActions } from "../../../store/CartUi-clice";

const CheckoutForm = () => {
  // import { cartFunctionalityActions } from "../../../store/CartFunctionality-slice";
  const dispatch = useDispatch();
  //   dispatch(cartFunctionalityActions.clearStore());

  const validCartStore = useSelector(
    (state) => state.CartFunctionalitySlice.cartItems.length > 0
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [comapnyName, setComapnyName]  = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [apartament, setApartament] = useState("");
  const [town, setTown] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameWasTouched, setFirstNameWasTouched] = useState(false);
  const [lastNameWasTouched, setLastNameWasTouched] = useState(false);
  // const [comapnyNameWasTouched, setComapnyNameWasTouched] = useState(false);
  const [countryWasTouched, setCountryWasTouched] = useState(false);
  const [streetWasTouched, setStreetWasTouched] = useState(false);
  const [apartamentWasTouched, setApartamentWasTouched] = useState(false);
  const [townWasTouched, setTownWasTouched] = useState(false);
  const [zipWasTouched, setZipWasTouched] = useState("");
  const [phoneWasTouched, setPhoneWasTouched] = useState(false);
  const [emailWasTouched, setEmailWasTouched] = useState(false);

  const textInputValid = (input) => {
    const notBlank = input.trim().length > 0;
    return notBlank;
  };
  const emailInputValid = (input) => {
    const notBlank = input.trim().length > 0;
    const email = input.includes("@");
    return notBlank && email;
  };

  const numberIsValid = (numInp) => {
    const notBlank = numInp.trim().length > 0;
    return notBlank;
  };

  const validfirstName = textInputValid(firstName);
  const validlastName = textInputValid(lastName);
  // const validcomapnyName = textInputValid(comapnyName);
  const validcountry = textInputValid(country);
  const validstreet = textInputValid(street);
  const validapartament = textInputValid(apartament);
  const validtown = textInputValid(town);
  const validzip = numberIsValid(zip);
  const validphone = numberIsValid(phone);
  const validemail = emailInputValid(email);

  // last validations for inputs
  // const invalidSubmitcomapnyName = comapnyNameWasTouched && !validcomapnyName;
  const invalidSubmitFirstName = firstNameWasTouched && !validfirstName;
  const invalidSubmitlastName = lastNameWasTouched && !validlastName;
  const invalidSubmitcountry = countryWasTouched && !validcountry;
  const invalidSubmitstreet = streetWasTouched && !validstreet;
  const invalidSubmitapartament = apartamentWasTouched && !validapartament;
  const invalidSubmittown = townWasTouched && !validtown;
  const invalidSubmitzip = zipWasTouched && !validzip;
  const invalidSubmitphone = phoneWasTouched && !validphone;
  const invalidSubmitemail = emailWasTouched && !validemail;

  const formIsValid =
    validfirstName &&
    validlastName &&
    validcountry &&
    validstreet &&
    validapartament &&
    validtown &&
    validzip &&
    validphone &&
    validemail;

  console.log(formIsValid);
  const checkoutSubmitHandler = (e) => {
    e.preventDefault();

    console.log("ss");
    dispatch(cartUIActions.cartSubmitted());
  };

  return (
    <div className={classes["form-container"]}>
      <h1>Checkout</h1>

      <form onSubmit={checkoutSubmitHandler}>
        {/* FORM INPUTS LEFT */}
        <div
          className={`${classes["form-inputs"]} ${classes["form-inputs-left"]}`}
        >
          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() => setFirstNameWasTouched(true)}
              type="text"
              placeholder="First Name"
              className={invalidSubmitFirstName ? classes["invalid-input"] : ""}
            />
            {invalidSubmitFirstName && <p>*Please select your first name</p>}
          </div>

          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setLastName(e.target.value)}
              onBlur={() => setLastNameWasTouched(true)}
              type="text"
              placeholder="Last Name"
              className={invalidSubmitlastName ? classes["invalid-input"] : ""}
            />
            {invalidSubmitlastName && <p>*Please select your last name</p>}
          </div>

          <div className={classes["input-container"]}>
            <input
              // onChange={(e) => setComapnyName(e.target.value)}
              // onBlur={() => setComapnyNameWasTouched(true)}
              type="text"
              placeholder="Company Name (Optional)"
            />
          </div>

          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setCountry(e.target.value)}
              onBlur={() => setCountryWasTouched(true)}
              type="text"
              placeholder="Country"
              className={invalidSubmitcountry ? classes["invalid-input"] : ""}
            />
            {invalidSubmitcountry && <p>*Please select your country</p>}
          </div>

          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setStreet(e.target.value)}
              onBlur={() => setStreetWasTouched(true)}
              type="text"
              placeholder="Street Adress"
              className={invalidSubmitstreet ? classes["invalid-input"] : ""}
            />
            {invalidSubmitstreet && <p>*Please input your street adress</p>}
          </div>
        </div>

        {/* FORM INPUTS RIGHT */}
        <div
          className={`${classes["form-inputs"]} ${classes["form-inputs-right"]}`}
        >
          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setApartament(e.target.value)}
              onBlur={() => setApartamentWasTouched(true)}
              type="text"
              placeholder="Apartment"
              className={
                invalidSubmitapartament ? classes["invalid-input"] : ""
              }
            />
            {invalidSubmitapartament && (
              <p>*Please select your apartament info</p>
            )}
          </div>

          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setTown(e.target.value)}
              onBlur={() => setTownWasTouched(true)}
              type="text"
              placeholder="Town/City"
              className={invalidSubmittown ? classes["invalid-input"] : ""}
            />
            {invalidSubmittown && <p>*Please select your Town/City </p>}
          </div>

          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setZip(e.target.value)}
              onBlur={() => setZipWasTouched(true)}
              type="number"
              placeholder="Postcode/ZIP"
              className={invalidSubmitzip ? classes["invalid-input"] : ""}
            />
            {invalidSubmitzip && <p>*Please select your Postcode/ZIP </p>}
          </div>
          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setPhoneWasTouched(true)}
              type="number"
              placeholder="Phone"
              className={invalidSubmitphone ? classes["invalid-input"] : ""}
            />
            {invalidSubmitphone && <p>*Please select your phone number </p>}
          </div>

          <div className={classes["input-container"]}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailWasTouched(true)}
              type="email"
              placeholder="Email Adress"
              className={invalidSubmitemail ? classes["invalid-input"] : ""}
            />
            {invalidSubmitemail && <p>*Please select your email adress </p>}
          </div>
        </div>

        {/* SMALL INFOR FOR USER */}
        <div className={classes["inform-user"]}>
          <p>No payment is required at this stage.</p>
          <p>
            After you've placed the order,
            <span> we will send you a payment link via email </span>
            (including shipping costs).
          </p>
        </div>

        {formIsValid && validCartStore ? (
          <button
            onClick={() => dispatch(cartUIActions.cartSubmitted())}
            type="submit"
            className={classes["sub-form-btn"]}
          >
            <Link className={classes["sub-form-btn-link"]} to="/feedback">
              Place Order
            </Link>
          </button>
        ) : (
          <button className={classes["invalid-btn"]}>
            <p> Place Order</p>
          </button>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
