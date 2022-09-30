/**
 * @fileOverview src/actions/alert.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
export const showProductItemDisplay = (prevState, action) => {
  const newState = prevState;
  newState.showProductDisplayItem = prevState.items.filter(
    item => item.id === action.payload.item
  );
  newState.showItemGridDisplay = action.payload.showItemGridDisplay;
  return { ...prevState, ...newState };
};
