import React from 'react';
import './Card.css';
const Card = ({src, title}) => {

    return (
        <div className="card">
            <img src={src} alt=""/>
             <h3>{title}</h3>
        </div>
    );
};

export default Card;