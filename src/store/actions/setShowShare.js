/**
 * @fileOverview src/actions/alert.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
 export const setShowShare = (prevState, action) => {
    const newState = prevState;
    newState.items = prevState.items.map(item => {
        if (item.id === action.payload.item) {
          item.currency = action.payload.currency;
        }
        return item;
      });
    return { ...prevState, ...newState };
  };