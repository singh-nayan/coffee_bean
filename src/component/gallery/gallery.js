import React from 'react';
import {galleryData} from './gallerydata';
import GalleryItems from './galleryItems';

let galleryStyle={
    position:"relative",
    height:"241.797px"
}

const gallery=()=>{
    return(
        <section id="gallery" className="gallery pt-2  bg-light">
            <h2 className="indent">Gallery</h2>
            <div className="block-masonry" style={galleryStyle}>
                <GalleryItems data={galleryData.image1}/>
                <GalleryItems data={galleryData.image2}/>
                <GalleryItems data={galleryData.image3}/>
                <GalleryItems data={galleryData.image4}/>
                <GalleryItems data={galleryData.image5}/>
            </div>
        </section>
    )
}

export default gallery;