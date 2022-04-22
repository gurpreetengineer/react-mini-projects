import { FETCH_SUCCESSFUL } from "../actions/types";

const initialState = { hell: " " };

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESSFUL:
      return {
        ...state,
        stockData: action.stockData,
      };
    default:
      return state;
  }
}
