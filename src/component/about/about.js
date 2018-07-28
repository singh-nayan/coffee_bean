import React from 'react';
import AboutImages from './aboutImages';
import './about.css';

const about=()=>{
    return(
        <section id="about">

            <div className="aboutContainer">
                <div id="aboutInnerContainer1">
                    <div id="aboutInnerContainer2">
                        <div id="aboutInnerContainer3">
                            <div id="aboutTitle">
                                <img id ="waves2" src="http://mutationmedia.net/COFFEEBEN/img/waves-dark.png" alt=""/>
                                <h1 id="aboutHeading">THE COFFEE SHOP</h1>
                                <span id="beige">Welcome to Coffeeben</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutContainer">
                <div id="aboutContent">
                    <div id="aboutImages">{<AboutImages/>}</div>
                    <div id="aboutTextSection">
                        <div id="aboutText">
                            <p id="aboutPara1">“Another thing about coffee is the community. Coffee drinkers have something in common when we walk into a coffee shop. We are all anticipating for that ultimate cup as we stay in line for our names to be called.”</p>
                            <h5 id="aboutHeader">COFFEEBEN KNOWLEDGE</h5>
                            <p id="aboutPara2">Another thing about coffee is the community. Coffee drinkers have something in common when we walk into a coffee shop. We are all anticipating for that ultimate cup as we stay in line for our names to be called. We already made up about coffee. We are all anticipating for that ultimate cup as we stay in line for our names to be called.</p>
                            <img id="sign" src="http://mutationmedia.net/COFFEEBEN/img/signature.png" alt=""/>
                        </div>
                    
                    </div>
                </div>
            </div>

        </section>
    )
}

export default about;