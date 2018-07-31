import React from 'react';

const footerItems=({icon})=>{
    return(
        <li className="list-inline-item">
            <a href="#" target="blank">
                <i>{icon}</i>
            </a>
        </li>
    )
}

export default footerItems