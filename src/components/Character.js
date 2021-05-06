import React, {useState, useEffect} from 'react'
import Card from "./Card.css";

function Character(props) {
    const character = props.character;
    return (
        <div>
            <img src={character.image} alt=" " />
            <p>{props.character.name}</p>
        </div>
    )
}
export default Character;