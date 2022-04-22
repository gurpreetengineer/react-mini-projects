import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { playersReducer } from '../actions';

function PlayerForm() {
    const dispatch = useDispatch()

    const [key, setKey] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [height, setHeight] = useState()
    
    const [totalPositions, setTotalPositions] = useState([1, 2, 3, 4, 5])
    const [noOfPositions, setNoOfPositions] = useState(1)
    const [positionType, setPositionType] = useState([])
    
    const [singlePlayerPositionTypes, setSinglePlayerPositionTypes] = useState([])
    const [positionNo, setPositionNo] = useState(0);
    
    const [playersDetails, setPlayersDetails] = useState([])
    
    useEffect(() => {
        dispatch(playersReducer(playersDetails))
    }, [playersDetails])

    const skillSet = useSelector(state => state.playersReducer.skillSet)

    const handleSubmit = (event) => {
        event.preventDefault()
        setKey(key + 1);
        // setFullName(`${firstName} ${lastName}`);
        setPlayersDetails([...playersDetails, {key, firstName, lastName, height, noOfPositions, positionType, fullName: `${firstName} ${lastName}`}])
    }
    
    const data = useSelector(state => state);

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <input name='firstName' type='text' placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)} />
                <input name='lastName' type='text' placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)} />
                <input name='height' type='number' placeholder='Height' value={height} onChange={event => setHeight(parseInt(event.target.value))} />
                <div>
                    <select value={noOfPositions} onChange={event => setNoOfPositions(parseInt(event.target.value))} >
                        <option value='position'>No. of Position(s)</option>
                        {totalPositions.map(singlePosition => (
                            <option key={singlePosition} value={singlePosition}>{singlePosition}</option>
                        ))}
                    </select>

                    {[...Array(noOfPositions).keys()].map(singleSkill => (
                        <select value={positionType} onChange={event => setPositionType(event.target.value)} >
                            <option value='select'>Select</option>
                            {skillSet.map(singleSkill => (
                                <option key={singleSkill} value={singleSkill}>{singleSkill}</option>
                            ))}
                        </select>
                    ))}
                    
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default PlayerForm
