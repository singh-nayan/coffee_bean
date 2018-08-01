import React from 'react';

let OverlayItemsStyle={
    width:"350px",
    float:"left",
    display:"block"
}

const overlayItems=()=>{
    return(
        <li style={OverlayItemsStyle}>
            <div className="block-review w-75 m-auto"></div>
        </li>
    )
}

export default overlayItems;