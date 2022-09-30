/**
 * @fileOverview src/actions/alert.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
export const setWishlist = (prevState, action) => {
  const newState = prevState;
  newState.wishlist = [...action.payload];
  return { ...prevState, ...newState };
};
