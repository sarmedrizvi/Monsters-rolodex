import React from 'react';
import {Card} from './Card.jsx'
import './Card-css.css'


export const CardList =(props) =>
(
    <div className="card-list">
     {props.monster.map(monster=>
        <Card key={monster.id} monster={monster} />
     )
     }
    </div>
);