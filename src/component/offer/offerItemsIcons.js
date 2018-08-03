import React from 'react';

const offerItemsIcons=({data})=>{
    return(
        <li className="list-inline-item">
            <img src={data} alt=""></img>
        </li>       
    )
}
export default offerItemsIcons;