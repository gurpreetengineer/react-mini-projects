import axios from 'axios';
import { SET_USER_DETAILS, ADD_A_NOTE, REMOVE_A_NOTE } from './actionTypes';

export const letsLoginTheUser = async (userCredentials) => {
  console.log('userrrrrrr', userCredentials);
  const { email, password } = userCredentials;

  const response = await axios({
    method: 'post',
    url: "https://assignment-venturepact.herokuapp.com/login",
    data: {
      email,
      password
  }
  });

  return response;
}

export const addNote = (aNote) => {
  console.log('this is a note', aNote);
  return {
    type: ADD_A_NOTE,
    payload: aNote,
  };
};

export const removeNote = (aNote) => {
  console.log('this is a note', aNote);
  return {
    type: REMOVE_A_NOTE,
    payload: aNote.id,
  };
};