/**
 * @fileOverview src/actions/auth/firstName.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @version 0.0.1
 */

 export const toggleAddProductModel = (prevState, action) => {
    const newState = prevState;
    newState.page.addProduct.open = action.payload;
    return { ...prevState, ...newState };
  };
  