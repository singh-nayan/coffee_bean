import React from 'react';

const mainMenuContent=({title})=>{
    let mainMenuConatainerPara= "Mango, Tropical Juices and a Hint of Coconut Blended with Ice and Swirled with Raspberry Puree."

    return(
        <div className="block-content mb-4 pb-4">
            <h5 className="uppercase" style={{"fontSize":".8751rem","fontWeight":"700"}}>{title}</h5>
            <p className="mb-1 mt-1" style={{"fontSize":".925rem"}}>{mainMenuConatainerPara}</p>
            <span className="dots"></span>
        </div>
    )
}

export default mainMenuContent;