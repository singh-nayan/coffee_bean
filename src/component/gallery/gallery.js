import React from 'react';

let galleryStyle={
    position:"relative",
    height:"241.797px"
}

const gallery=()=>{
    return(
        <section id="gallery" className="gallery pt-2  bg-light">
            <div className="block-masonry" style={galleryStyle}></div>
        </section>
    )
}

export default gallery;