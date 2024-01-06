 /**
 * @fileOverview src/actions/alert.js
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @version 0.0.1
 */
export const addNetwork = (prevState, action) => {
    const newState = prevState;
    //ToDo :: make sure the new one isnt in already
    newState.settings.blockchain.networks.push(action.payload);    
    return { ...prevState, ...newState };
  };
  