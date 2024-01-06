/**
 * @fileOverview src/bootstrap/store.js
 * @author Michael A. Dennis <michaeladennis@yahoo.com>
 * @copyright M.A.D. Computer Consulting LLC 2021
 * @version 0.0.1
 */
import React, { createContext, useReducer } from "react";
import { actions } from "./actions";
function AdminWalletAddresses() {
  return {
    "": ""
  };
}
export const initialState = {
  settings: {
    general: {
      open: false,
      shippingAndHandling: {
        filename: null,
        downloadable: false,
        uploaded: false,
        uploadProgress: 0
      },
      termsOfUse: {
        filename: null,
        downloadable: false,
        uploaded: false,
        uploadProgress: 0
      },
      privacyPolicy: {
        filename: null,
        downloadable: false,
        uploaded: false,
        uploadProgress: 0
      },
      gdpr: {
        filename: null,
        downloadable: false,
        uploaded: false,
        uploadProgress: 0
      },
      cookies: {
        filename: null,
        downloadable: false,
        uploaded: false,
        uploadProgress: 0
      }
    },
    language: {
      open: false
    },
    siteMetadata: {
      open: false,
      title: "Winston Shopping Cart",
      description:
        "Shop using your favorite Cryptocurrency direct from the supplier with this Cryptocurrency Shopping Cart.",
      keywords: "Cryptocurrency, Shopping Cart, Decentralized Finance, Demo",
      copyright: "Copyright © 2022 M.A.D. Computer Consulting LLC"
    },
    checkout: {
      open: false,
      fiatConversionType: "USD",
      selectedCurrency: ""
    },
    storage: {
      open: false
    },
    blockchain: {
      open: false,
      defaultPaymentNetworks: [
        {
          symbol: "BNB",
          chainId: 56
        }
      ],
      networks: [],
      tokens: [],
      dexs: [],
      pairs: []
    },
    wallet: {
      open: false
    }
  },
  page: {
    options: "Filter",
    sortType: "none",
    category: "Category",
    subcategory: "Subcategory",
    items: [],
    addProduct: {
      open: false,
      value: "",
      dialogValue: {
        title: "",
        year: ""
      }
    }
  },
  showItemGridDisplay: true,
  showCheckoutStep: 0,
  showProductDisplayItem: null,
  email: "",
  captcha: "",
  isLoading: true,
  isLeadLoading: false,
  response: "",
  items: [],
  favorites: [],
  wishlist: [],
  cartItems: [],
  filteredItems: [],
  authenticated: true,
  admin: {
    addresses: AdminWalletAddresses()
  },
  selectedNetwork0: "",
  selectedNetwork1: "",
  networks: [],
  selectedToken0: "",
  selectedToken1: "",
  tokens: [],
  selectedRouter: "",
  dexs: [],
  pricingConfig: {}
};

export const init = () => {
  return initialState;
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (!action.type || !actions.hasOwnProperty(action.type)) {
        console.log(action);
        throw new Error("Error: Action Not Found!");
      }
      return actions[action.type](state, action);
    },
    initialState,
    init
  );
  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
};

export { store, StateProvider };
