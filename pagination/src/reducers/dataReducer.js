import React from 'react';
import {DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE} from '../actions/constants'

const initialState = {
  data: [],
}

function Reducer(state=initialState, action) {
  switch(action.type){
    case DATA_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case DATA_FETCH_FAILURE:
      return {
        ...state,
        data: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default Reducer
