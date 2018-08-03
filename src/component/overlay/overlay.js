import React from 'react';
import OverlayItems from './overLayItems';
import {overlayData} from '../../data';

let overlayStyle={
    "backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/8.jpg)`,
    "backgroundPosition":"initial"
}
let overlayULstyle={
    width:"1000%",
    transform:"translate3d(-700px, 0px, 0px)"
}

let overlaydivStyle={
    overflow:"hidden",
    position:"relative"
}

const overlay=()=>{
    return(
        <section className="overlay review gap-double-md">

            <div className="background-img" style={overlayStyle}>
                <img src="http://mutationmedia.net/COFFEEBEN/img/8.jpg"/>
            </div>

            <div className="container">
                <div className="row justify-content-md-end">
                    <div className="col-md-6 col-lg-5 col-xl-4">
                        <div className="block-content review-content text-center front-p">
                            <img src="http://mutationmedia.net/COFFEEBEN/img/grains.png"/>
                            <div className="review-slider flexslider">

                                <div className="flex-viewport" style={overlaydivStyle}>
                                    <ul className="slides" style={overlayULstyle}>

                                    <OverlayItems data={overlayData.li1} classname="clone"/>
                                    <OverlayItems data={overlayData.li2} classname=""/>
                                    <OverlayItems data={overlayData.li3} classname=""/>
                                    <OverlayItems data={overlayData.li3} classname=""/>
                                    <OverlayItems data={overlayData.li4} classname="clone"/>

                                    </ul>
                                </div>                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default overlay;