/**
 * @fileOverview src/actions/auth/firstName.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @version 0.0.1
 */

export const addToCart = (prevState, action) => {
  const newState = prevState;
  newState.cartItems.push(action.payload);
  console.log(action.payload);
  return { ...prevState, ...newState };
};
