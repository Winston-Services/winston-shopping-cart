import { alert } from "./alert";
import { error } from "./error";
import { firstName } from "./firstName";
import { setCaptcha } from "./setCaptcha";
import { setCartItems } from "./setCartItems";
import { setCheckoutDisplayStep } from "./setCheckoutDisplayStep";
import { setEmail } from "./setEmail";
import { setFavorites } from "./setFavorites";
import { setIsLeadLoading } from "./setIsLeadLoading";
import { setIsLoading } from "./setIsLoading";
import { setItemGridDisplay } from "./setItemGridDisplay";
import { setItems } from "./setItems";
import { setProductDisplayItem } from "./setProductDisplayItem";
import { showProductItemDisplay } from "./showProductItemDisplay";
import { setResponse } from "./setResponse";
import { setWishlist } from "./setWishlist";
import { connect } from "./sockets/connect";
import { connected } from "./sockets/connected";
import { error as socketError } from "./sockets/error";
import { addToFavorites } from "./addToFavorites";
import { removeFromFavorites } from "./removeFromFavorites";
import { addToWishList } from "./addToWishList";
import { removeFromWishList } from "./removeFromWishList";
import { setExpanded } from "./setExpanded";
import { setCurrency } from "./setCurrency";
import { setShowShare } from "./setShowShare";
import { addToCart } from "./addToCart";
import { removeFromCart } from "./removeFromCart";
import { togglePageOptionsBar } from "./togglePageOptionsBar";
import { setProductDialogValue } from "./admin/products/setProductDialogValue";
import { setProductFormValue } from "./admin/products/setProductFormValue";
import { toggleAddProductModel } from "./admin/products/toggleAddProductModel";

import { setSelectedCategoryOption } from "./setSelectedCategoryOption";
import { setPageItems } from "./setPageItems";
import { setSelectedSubcategoryOption } from "./setSelectedSubcategoryOption";
import { setSortType } from './setSortType';
import { toggleSettingsTab } from './toggleSettingsTab';
import { saveSiteMetadata } from './saveSiteMetadata';
import { toggleBlockchainSettingsSection } from './toggleBlockchainSettingsSection';


import { addNetwork } from './admin/networks/addNetwork';
export const actions = {
  firstName,
  error,
  alert,
  setCaptcha,
  setCartItems,
  setCheckoutDisplayStep,
  setEmail,
  setFavorites,
  setIsLeadLoading,
  setIsLoading,
  setItemGridDisplay,
  setItems,
  setProductDisplayItem,
  showProductItemDisplay,
  setResponse,
  setWishlist,
  connect,
  connected,
  socketError,
  addToFavorites,
  removeFromFavorites,
  setExpanded,
  setCurrency,
  setShowShare,
  addToWishList,
  removeFromWishList,
  addToCart,
  removeFromCart,
  togglePageOptionsBar,
  setProductDialogValue,
  setProductFormValue,
  toggleAddProductModel,
  setSelectedCategoryOption,
  setPageItems,
  setSelectedSubcategoryOption,
  setSortType,
  toggleSettingsTab,
  saveSiteMetadata,
  toggleBlockchainSettingsSection,
  addNetwork
};
