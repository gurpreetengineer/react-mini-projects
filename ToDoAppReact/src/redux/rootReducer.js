import { combineReducers } from "redux";
import showNoteReducer from './reducers';

const rootReducer = () => combineReducers({
  showNotes: showNoteReducer
})

export default rootReducer;