import React from 'react';

let heroMainSliderStyle={
    width: "100%",
    float: "left",
    "margin-right": "-100%",
    position: "relative",
    height: "391px"
}

let heroMainSliderImageStyle={
    "background-position":"initial"

}

const heroMainSlider=()=>{
    return(
        <div className="main-slider slider flexislider">

            <ul className="slides">
                <li style={heroMainSliderStyle}>
                    <div className="background-img overlay zoom" style={heroMainSliderImageStyle}>
                        <img src="http://mutationmedia.net/COFFEEBEN/img/1.jpg" alt=""/>
                    </div>
                </li>
                <li style={heroMainSliderStyle}>
                    <div className="background-img overlay zoom" style={heroMainSliderImageStyle}>
                        <img src="http://mutationmedia.net/COFFEEBEN/img/2.jpg" alt=""/>
                    </div>
                </li>
            </ul>

            <ol className="flex-control-nav flex-control-paging">
                <li>
                    <a>1</a>
                </li>
                <li>
                    <a>2</a>
                </li>
            </ol>

        </div>
    )
}

export default heroMainSlider;