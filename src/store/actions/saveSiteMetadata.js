/**
 * @fileOverview src/actions/alert.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
 export const saveSiteMetadata = (prevState, action) => {
    const newState = prevState;
    newState.settings.siteMetadata[action.payload.target] = action.payload.value;
    return { ...prevState, ...newState };
  };