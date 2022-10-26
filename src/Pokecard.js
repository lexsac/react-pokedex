import React from 'react';
import './Pokecard.css';

const POKE_API_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/** Individual Pokemon card. */

function Pokecard(props) {
    const PokecardImg = `${POKE_API_URL}${props.id}.png`;

    return (
        <div className="Pokecard">
            <h1 className="Pokecard-name">{props.name}</h1>
            <img className="Pokecard-image" src={PokecardImg} alt={props.name} />
            <p className="Pokecard-text">Type: {props.type}</p>
            <p className="Pokecard-text">EXP: {props.exp}</p>
        </div>
    );
}

export default Pokecard;