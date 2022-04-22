import React from 'react'
import {useSelector} from 'react-redux'
import DropDownMenu from './DropDownMenu'

function TeamMaker() {
    const state = useSelector(state => state.playersReducer.basketballPlayers)

    const loopFive = [1, 2, 3, 4, 5]
    console.log("TeamMaker----", state)
    return (
        <div>
            {loopFive.map(loopSingle => (
                <div key={loopSingle}>
                    <DropDownMenu basketballPlayers={state} />
                </div>
            ))}
            {/* <DropDownMenu />
            <DropDownMenu />
            <DropDownMenu />
            <DropDownMenu /> */}
        </div>
    )
}

export default TeamMaker
