import { FETCH_SUCCESSFUL } from "./types";
export const loadStocks = () => ({
  type: FETCH_SUCCESSFUL,
});

export const setStocks = (state) => ({
  type: FETCH_SUCCESSFUL,
  stockData: state,
});
