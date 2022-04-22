import { SUCCESS, FAILED } from './actionTypes';

const error = "Unable to fetch data";

export const playersReducer = playersData => {
  if(playersData !== null || playersData !== undefined){
    return {
      type: SUCCESS,
      payload: playersData
    } 
  } else {
    return {
      type: FAILED,
      payload: error
    }
  }
}