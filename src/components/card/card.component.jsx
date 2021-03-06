import React from 'react';
import './card.styles.css';

// functional component returns html only. No state or llfe cycle awareness.
export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=300x300`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)