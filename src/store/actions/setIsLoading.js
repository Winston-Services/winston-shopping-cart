/**
 * @fileOverview src/actions/alert.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
export const setIsLoading = (prevState, action) => {
  const newState = prevState;
  newState.isLoading = action.payload;
  return { ...prevState, ...newState };
};
