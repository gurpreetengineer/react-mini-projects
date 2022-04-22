import { FETCH_NOTES } from "../actions/ActionTypes";

const initialState = {
  noteList: [],
};

function showNoteReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        noteList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default showNoteReducer;
