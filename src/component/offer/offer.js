import React from 'react';
import OfferItems from './offerItems';
import {offerData} from './offerData';

let offerStyle={
    overflow:"hidden",
    position:"relative"
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
                                <img class="waves" src="http://mutationmedia.net/COFFEEBEN/img/waves-dark.png" alt=""/>
                                <h1 class="uppercase mb-0">What we offer</h1>
                                <span class=" beige">Variety of Coffee and Pastry</span>
                            </div>
                            <p class="lead mb-0 mt-4">Coffee lovers love the aroma of coffee especially in the morning <br/>because coffee has a way to brighten moods.</p>
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
                                    <ul className="slides" style={offerStyleUL}>

                                        <OfferItems offerData={offerData.data1}/>
                                        <OfferItems offerData={offerData.data2}/>
                                        
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