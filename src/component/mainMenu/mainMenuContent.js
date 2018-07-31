import React from 'react';

const mainMenuContent=({title})=>{
    let mainMenuConatainerPara= "Mango, Tropical Juices and a Hint of Coconut Blended with Ice and Swirled with Raspberry Puree."

    return(
        <div className="block-content mb-4 pb-4">
            <h5 className="uppercase">{title}</h5>
            <p className="mb-1 mt-1">{mainMenuConatainerPara}</p>
            <span className="dots"></span>
        </div>
    )
}

export default mainMenuContent;