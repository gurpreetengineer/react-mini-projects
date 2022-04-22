import {DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE} from './constants';


export const Success = () => (dispatch) => {
     fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json())
    .then(data => dispatch({
      type: DATA_FETCH_SUCCESS,
      payload: data }))
    .catch(err=> dispatch({ 
      type: DATA_FETCH_FAILURE,
      payload: err}))
}

// export const failure = () => {
//   return ({
//     type: "DATA_FETCH_FAILURE",
//     payload: "Error occurred while fetching."
//   })
// }