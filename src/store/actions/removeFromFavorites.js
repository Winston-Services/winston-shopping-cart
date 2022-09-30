/**
 * @fileOverview src/actions/auth/firstName.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @version 0.0.1
 */

export const removeFromFavorites = (prevState, action) => {
  const newState = prevState;
  newState.favorites = prevState.favorites.filter(id => id !== action.payload);
  // console.log(action.payload);
  return { ...prevState, ...newState };
};
