import { combineReducers } from "redux";
import { loginReducer, editingNotesReducer } from "./reducers";


const reducers = combineReducers({
  editingNotesReducer: editingNotesReducer,
  loginer: loginReducer,
});

export default reducers;
