import React from 'react';

const navBarItems=({name,refer})=>{
    return(
        <li>
            <a className="scroll list-inline-item" href={refer}>{name}</a>
        </li>
    )
}

export default navBarItems;