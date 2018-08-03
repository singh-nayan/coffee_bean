import React from 'react';

let herobckgndimg1={
    "backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/1.jpg)`
}

let herobckgndimg2={
    "backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/2.jpg)`
}

const heroMainSlider=()=>{
    return(
        <div className="main-slider slider flexslider">

            <ul className="slides">
                <li>
                    <div className="background-img overlay zoom" style={herobckgndimg1}>
                        <img src="http://mutationmedia.net/COFFEEBEN/img/1.jpg" alt=""/>
                    </div>
                </li>
                <li>
                    <div className="background-img overlay zoom" style={herobckgndimg2}>
                        <img src="http://mutationmedia.net/COFFEEBEN/img/2.jpg" alt=""/>
                    </div>
                </li>
            </ul>

            
             

        </div>
    )
}

export default heroMainSlider;