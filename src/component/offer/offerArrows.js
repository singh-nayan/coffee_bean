import React from 'react';

const offerArrows=({data})=>{
    return(
        <li>
            <a className={data.anchorClass} href="#">
                <i className={data.italicClass}>{data.icon}</i>
            </a>
        </li>
    )
}

export default offerArrows;