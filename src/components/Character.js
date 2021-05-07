import React, {useState, useEffect} from 'react'
import "./Card.css";

function Character(props) {
    const character = props.character;
    return (
        <div className='flip-card'>
            <div className="flip-card-inner">
            <div className="image-container">
                <img src={character.image} alt=" " />
            </div> 
            <div className="flip-card-back">
                <h3>{props.character.name}</h3>
            </div>
        </div>
            {/* <img src={character.image} alt=" " /> */}
            {/* <p>{props.character.name}</p> */}
            </div>
    )
}
export default Character;