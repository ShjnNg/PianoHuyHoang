import * as actionTypes from "../constants/cartConstants";

import axios from "axios";
/* const URL = 'http://localhost:5000'; */
/* const URL = 'https://piano1.herokuapp.com'; */
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      title: data.title,
      attachment: data.attachment,
      cost: data.cost,
      review: data.review,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
