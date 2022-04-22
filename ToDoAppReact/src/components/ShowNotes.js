import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchNotes from "../redux/actions/actions";

function ShowNotes({ sendState }) {
  const dispatch = useDispatch();

  const [notes, setNotes] = useState();
  const noteList = useSelector((state) => state.showNotes.noteList);

  useEffect(() => {
    setNotes([])
    
    dispatch(fetchNotes());
  }, [dispatch, sendState]);

  useEffect(() => {
    if(noteList.length > 0){
      console.log('notes', notes)
      setNotes([...notes, noteList])
      // setNotes(notes.sort((a,b) => a.timestamp - b.timestamp)) 
    }
    
  }, [noteList]);

  return (
    <div>
      <ul>
        {/* <li>{noteList}</li> */}
        <li> Hello everyone in english</li>
        <li> Lorem Ipsum</li>
        {notes &&
          notes.map((note, index) => <li key={`${note} ${index}`}>{note}</li>)}
        {/* <li>{notes}</li> */}
      </ul>
    </div>
  );
}

export default memo(ShowNotes);
