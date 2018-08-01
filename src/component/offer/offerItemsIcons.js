import React from 'react';

const offerItemsIcons=({data})=>{
    return(
        <li className="list-inline-item">
            <img src={data}></img>
        </li>       
    )
}
export default offerItemsIcons;