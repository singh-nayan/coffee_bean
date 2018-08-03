import React from 'react';
import OverlayStars from './overlayStars';
import {FaStar} from 'react-icons/fa';
import {FaStarHalf} from 'react-icons/fa';

let OverlayItemsStyle={
    width:"350px",
    float:"left",
    display:"block"
}

const overlayItems=({data,classname})=>{
    return(
        <li className={classname} style={OverlayItemsStyle}>
            <div className="block-review w-75 m-auto">
                <h4 className=" uppercase">{data.head}</h4>
                <p>{data.para}</p>
                <ul className="block-star list-inline">
                    <OverlayStars />
                    <OverlayStars />
                    <OverlayStars />
                    <OverlayStars />
                    <OverlayStars />
                </ul>
            </div>
        </li>
    )
}

export default overlayItems;