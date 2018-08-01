import React from 'react';

const galleryItems=({data})=>{
    return(
        <div className={data.div1.class} style={data.div1.style}>
            <div className={data.div2.class}>
                <a href={data.image} className={data.anchor}>
                    <div className={data.div3.class} style={data.div3.style}>
                        <img className={data.imageClass} scr={data.image} alt=""></img>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default galleryItems;