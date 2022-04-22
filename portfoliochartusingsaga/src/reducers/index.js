import { combineReducers } from "redux";
import stockReducer from "./stockReducer";

export default combineReducers(console.log("^^^^^^^^^^^^^", stockReducer), {
  stocks: stockReducer,
});
