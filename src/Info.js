import React from 'react';
import './Info.css';

function Info({title, image, description}) {
    return (
        <div className='info'>
            <h2>{title}</h2>
            <img src={image} alt=''/>
            <div className='info__description'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Info
