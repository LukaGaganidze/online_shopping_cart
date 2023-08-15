// import { useDispatch } from "react-redux";
import { cartFunctionalityActions } from "../CartFunctionality-slice";

export const sendDataToServer = (cart) => async (dispatcher) => {
  const sendRequest = async () => {
    const response = await fetch(
      "https://react-http-8cfd6-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (!response.ok) throw new Error("Smthn Went Sideways");
  };

  await sendRequest();
};

export const getDataFromServer = (cart) => async (dispatcher) => {
  const getRequest = async () => {
    const response = await fetch(
      "https://react-http-8cfd6-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
    );

    if (!response.ok) throw new Error("smthin went wrong");
    const data = await response.json();

    return data;
  };

  try {
    const cartData = await getRequest();
    dispatcher(
      cartFunctionalityActions.replaceItems({
        totalAmount: cartData.totalAmount,
        cartItems: cartData.cartItems || [],
      })
    );
  } catch (error) {
    throw new Error(error);
  }
};
