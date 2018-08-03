import React from 'react';
import OfferItems from './offerItems';
import OfferArrows from './offerArrows'
import {offerData} from '../../data';

let offerStyle={
    overflow:"hidden",
    position:"relative"
}

let offerItemStyle={
    width:"1110px",
    float:"left",
    display:"block"
}

let offerStyleUL={
    width: "800%",
    transform: "translate3d(-1110px, 0px, 0px)"
}

const offer=()=>{
    return(
        <section id="offer" className="main bg-light">
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9 ">
                        <div className="block-content text-center gap-one-bottom-md">
                            <div className="block-title ">
                                <img className="waves" src="http://mutationmedia.net/COFFEEBEN/img/waves-dark.png" alt=""/>
                                <h1 className="uppercase mb-0">What we offer</h1>
                                <span className=" beige">Variety of Coffee and Pastry</span>
                            </div>
                            <p className="lead mb-0 mt-4">Coffee lovers love the aroma of coffee especially in the morning <br/>because coffee has a way to brighten moods.</p>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-lg-12">
                        <div className="block-content text-center front-p">
                            <div className="offer-slider flexslider">

                                <div className="flex-viewport" style={offerStyle}>
                                    <ul className="slides">
                                        <OfferItems data={offerData.data1}/>
                                        <OfferItems data={offerData.data2}/>
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

export default offer;