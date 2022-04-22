import { SUCCESS, FAILED } from "../actions/actionTypes";

const initialState = {
  skillSet: [ 'Point Guard (PG)', 'Shooting Guard (SG)', 'Small Forward (SF)', 'Power Forward (PF)', 'Center (C)'],
  basketballPlayers: [],
  error: ''
};

const playersReducer = ( state = initialState, action) => {
  console.log("--dropReducer--", action)
  switch(action.type){
    case SUCCESS:
      return {
        ...state,
        basketballPlayers: action.payload
      }
    case FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return {
        ...state,
        error: 'default case'
      }
  }
}

export default playersReducer;