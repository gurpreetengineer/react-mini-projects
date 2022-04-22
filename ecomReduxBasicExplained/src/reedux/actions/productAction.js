import { ActionTypes } from "../constants/action-type"


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  console.log('selectedProduct ', product)
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const setLoader = (loaderState) => {
  console.log('action', loaderState)
  return {
    type: ActionTypes.LOADER_HANDLER,
    payload: loaderState,
  }
}