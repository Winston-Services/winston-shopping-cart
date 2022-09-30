/**
 * @fileOverview src/bootstrap/store.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @version 0.0.1
 */
import React, { createContext, useReducer } from "react";
import { actions } from "./actions";

export const initialState = {
  showItemGridDisplay: true,
  showCheckoutStep: 0,
  showProductDisplayItem: null,
  email: "",
  captcha: "",
  isLoading: true,
  isLeadLoading: false,
  response: "",
  items: [],
  favorites: [],
  wishlist: [],
  cartItems: []
};

export const init = () => {
  return initialState;
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (!action.type || !actions.hasOwnProperty(action.type)) {
        console.log(action);
        throw new Error("Error: Action Not Found!");
      }
      return actions[action.type](state, action);
    },
    initialState,
    init
  );
  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
};

export { store, StateProvider };
