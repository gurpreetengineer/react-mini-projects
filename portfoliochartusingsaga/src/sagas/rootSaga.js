import { call, take, put } from "redux-saga/effects";
import { FETCH_SUCCESSFUL } from "../actions/types";
import fetchStocks from "../actions/postActions";
import { setStocks } from "../actions/allActions";
import stockReducer from "../reducers/stockReducer";

function* stockSaga() {
  const stocksData = yield call(fetchStocks);
  const allStocks = yield setStocks(stocksData);
  yield put(allStocks);
}

function* rootSaga() {
  yield take(FETCH_SUCCESSFUL);
  yield call(stockSaga);
  
}

export default rootSaga;
