import { FETCH_SUCCESSFUL, FETCH_FAILED } from "../actions/types";
import axios from "axios";

export const fetchStocks = () => (dispatch) => {
  axios
    .get("https://demo8900446.mockable.io/portfoliochartredux")
    .then((res) => res.data) //.json())
    .then((stocks) => {
      dispatch({
        type: FETCH_SUCCESSFUL,
        payload: stocks.map((data) => {
          return data;
        }),
      });
    });

};
