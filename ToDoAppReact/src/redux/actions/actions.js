import { FETCH_NOTES, POST_NOTES } from './ActionTypes';
import { db } from '../../components/firebase/firebase';


const fetchNotes = () => dispatch => {
  db.collection('Notes').get().then(snap => {
    snap.docs.map(doc => dispatch({
      type: FETCH_NOTES,
      payload: doc.data().note
    }));
  })
}

export default fetchNotes;