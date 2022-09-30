/**
 * @fileOverview src/actions/error.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */

export const setExpanded = (prevState, action) => {
  const newState = prevState;
  newState.items = prevState.items.map(item => {
    if (item.id === action.payload.item) {
      console.log(item);
      item.expanded = !action.payload.expanded;
      console.log(item);
    }
    return item;
  });
  return { ...prevState, ...newState };
};
