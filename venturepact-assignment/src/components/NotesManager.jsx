import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles/NotesManager.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../redux/actions';

const NotesManager = () => {
  const isUserLoggedIn = useSelector((state) => state?.loginer?.login);

  return (
    <div className="NM_container">
      {isUserLoggedIn ? (
        <NotesAddition />
      ) : (
        <div className='NM_warning'>Fella, you need to login to do anything significant here</div>
      )}
    </div>
  );
};


const NotesAddition = () => {
  const dispatch = useDispatch();

  const [noteTitle, setNoteTitle] = useState([]);
  const [noteDescription, setNoteDescription] = useState([]);

  const submitNote = () => {
    dispatch(addNote({
      id: new Date().getSeconds(),
      noteTitle: noteTitle,
      noteDescription: noteDescription,
      createdAt: new Date(),
      isDeleted: false,
    }));
    setNoteTitle('');
    setNoteDescription('');
  }

  return (
    <Fragment>
      <div className='NM_NE_container'>
        <input
          className='NM_NE_title' 
          placeholder="Add a title here"
          value={noteTitle}
          onChange={(event) => setNoteTitle(event.target.value)}
        />
        <textarea
          className='NM_NE_description'
          placeholder="Jot down ..."
          value={noteDescription}
          onChange={(event) => setNoteDescription(event.target.value)}
        />
        <button
          className='NM_NE_button'
          onClick={submitNote}
        >
          {' '}
          Add a note{' '}
        </button>
      </div>
      <div className='NM_NE_caption'>
        For full note list
        <Link to="/show-notes" className='NM_NE_link'>Click on me</Link>
      </div>
    </Fragment>
  )
}
export default NotesManager;
