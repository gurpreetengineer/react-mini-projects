import stockReducer from "./reducers/stockReducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const initialState = {}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  stockReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;

