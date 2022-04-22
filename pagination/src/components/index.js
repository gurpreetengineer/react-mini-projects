import React, {useState, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import rootReducer from '../reducers/index';
import {Success} from '../actions/index';

function Pagination(props) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(Success());
  }, []);
  
  const state = useSelector(state => state.DataReducer.data)

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Album Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>Thumbnail Url</th>
          </tr>
            {state.map(value => 
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.albumId}</td>
                <td>{value.title}</td>
                <td>{value.url}</td>
                <td>{value.thumbnailUrl}</td>
              </tr>
            )}  
        </tbody>
      </table>
      {/* {buttonRow} */}
    </div>
  )
}

export default Pagination;


// useEffect(() => {
//   dispatch(allActions.userActions.setUser(user))
// }, [])
