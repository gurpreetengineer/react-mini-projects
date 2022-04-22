import React from 'react'
import NavBar from './NavBar';
import PlayerForm from './PlayerForm'
import TeamMaker from './TeamMaker'

function MainComponent() {
    return (
        <div>
            <NavBar />
            <PlayerForm />
            <TeamMaker />
        </div>
    )
}

export default MainComponent;
