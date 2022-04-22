import React from 'react'

function DropDownMenu({basketballPlayers}) {
  return (
    <div>
      <div>
        Kind of Drop Down Menu (not needed)
      </div>
      <div>
        <select>
            <option value='Select'>Select</option>
            {basketballPlayers.map(aPlayer => (
              <option key={aPlayer.key} value={aPlayer.fullName}>{aPlayer.fullName}</option>
            ))}
        </select>
        <select>
            <option value='Select'>Select</option>
            {basketballPlayers.map(aPlayer => (
              <option key={aPlayer.key} value={aPlayer.positionType}>{aPlayer.positionType}</option>
            ))}
        </select>
      </div>

    </div>
  )
}

export default DropDownMenu
