import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/ShowNotesPage.css';
import Eraser from '../assets/eraser.png';
import { removeNote } from '../redux/actions';

const ShowNotesPage = () => {
  const notesList = useSelector((state) => state?.editingNotesReducer?.notes);
  const notesLis22t = useSelector((state) => state);

  useEffect(() => {
  }, [notesList]);

  return (
    <div className='SNP_container'>
      {notesList?.length !== 0 &&
      notesList.map(aNote => (
        <Card aNote={aNote} key={aNote.id} />
      ))}
    </div>
  )
}

const Card = ({aNote}) => {
  const [isErased, setIsErased] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeNote(aNote));
    setIsErased(false);
  }, [isErased]);
  console.log('anteee', aNote);
  const shortTitle = aNote.noteTitle.length > 18 ? aNote.noteTitle.substr(0,18) + ' ...' : aNote.noteTitle;
  const shortDescription = aNote.noteDescription.length > 50 ? aNote.noteDescription.substr(0,50) + ' ...' : aNote.noteDescription;
  console.log('short', shortDescription);
  const shortDate = aNote.createdAt.substr(0,24);
  return (
    <Fragment>
    {!aNote.isDeleted && 
    <div className='Card_container'>
      <div className='Card_title_container'>
        <div className='Card_title'>{shortTitle}</div>
        <div onClick={() => setIsErased(true)}>
          <img src={Eraser} alt='Eraser' label='Erase the note' className='Card_eraser'/>
        </div>
      </div>
      <div className='Card_description'>{shortDescription}</div>
      <div className='Card_createdAt'>{shortDate}</div>
    </div>
    }
    </Fragment>
  )
}

export default ShowNotesPage;
