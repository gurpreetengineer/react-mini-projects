import { FETCH_SUCCESSFUL, FETCH_FAILED } from "../actions/types";

const initialState = {
  stocksData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESSFUL:
      return {
        ...state,
        stocksData: action.payload,
      };
    default:
      return state;
  }
}
