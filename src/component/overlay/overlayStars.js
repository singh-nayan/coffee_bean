import React from 'react';
import {FaStar} from 'react-icons/fa'

const overlayStars=()=>{
    return(
        <li className="list-inline-item">
            <i className="icon-star">{<FaStar/>}</i>
            
        </li>
    )
}

export default overlayStars;