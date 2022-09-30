/**
 * @fileOverview src/actions/error.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */

export const connected = (prevState, action) => {
  const newState = prevState;
  newState[action.section].connected = action.payload;
  return { ...prevState, ...newState };
};
