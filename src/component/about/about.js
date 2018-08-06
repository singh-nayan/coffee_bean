import React from 'react';
import AboutImages from './aboutImages';
import {aboutImagesData} from '../../data';

let aboutStyle={
    "backgroundColor": "#fffceb !important"
}

const about=()=>{
    return(
        <section id="about" className="main md-top bg-light" style={aboutStyle}>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9 ">
                        <div className="block-content text-center gap-one-bottom-md">
                            <div className="block-title ">
                                <img className ="waves" src="http://mutationmedia.net/COFFEEBEN/img/waves-dark.png" alt=""/>
                                <h1 className="uppercase mb-0" style={{"fontSize":"1.875rem"}}>THE COFFEE SHOP</h1>
                                <span className="beige">Welcome to Coffeeben</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">    

                <div className="row justify-content-center text-center">

                    <div className="col-12 col-lg-9 ">
                        <div className="card-gallery image-gallery mb-5">
                            <AboutImages image={aboutImagesData.image1}/>
                            <AboutImages image={aboutImagesData.image2}/>
                            <AboutImages image={aboutImagesData.image3}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="block-about">
                            <p className="quote mb-5 ">“Another thing about coffee is the community. Coffee drinkers have something in common when we walk into a coffee shop. We are all anticipating for that ultimate cup as we stay in line for our names to be called.”</p>
                            <h5 className="mb-5 alt-font uppercase">COFFEEBEN KNOWLEDGE</h5>
                            <p className=" mb-5">Another thing about coffee is the community. Coffee drinkers have something in common when we walk into a coffee shop. We are all anticipating for that ultimate cup as we stay in line for our names to be called. We already made up about coffee. We are all anticipating for that ultimate cup as we stay in line for our names to be called.</p>
                            <img className="sing mb-0" src="http://mutationmedia.net/COFFEEBEN/img/signature.png" alt=""/>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default about;