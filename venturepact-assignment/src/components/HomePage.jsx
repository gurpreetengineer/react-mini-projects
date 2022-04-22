import React from 'react';
import './styles/HomePage.css';
import {LoginManager, NotesManager} from '../components';

const HomePage = () => {
  return (
    <div className='HP_container'>
      <div className='HP_leftHalf'>
        <LoginManager />
      </div>
      <div className='HP_rightHalf'>
        <NotesManager />
      </div>
    </div>
  )
}

export default HomePage
