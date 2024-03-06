import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
const [ playerName, setPlayerName ] = useState(initialName);
const [ isEditing, setIsEditing ] = useState(false);

function onEdit() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
        onChangeName(symbol, playerName);
    }
}

function handleNameChange(event) {    
    setPlayerName(event.target.value);
}

let editPlayerName = <span className="player-name">{playerName}</span>
let btnCaption = "Edit";

if(isEditing) {
    editPlayerName = <input type="text" required value={playerName} onChange={handleNameChange}></input>
    btnCaption = "Save";
}


// or instead of btnCaption we can use ternary option like below:
// isEditing ? 'Save' : 'Edit'

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEdit}>{btnCaption}</button>
        </li>
    );
}