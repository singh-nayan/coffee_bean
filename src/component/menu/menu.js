import React from 'react';
import './menu.css';

const menu=()=>{
    return(
        <section id="menu">

            <div id="menuBackgroundImage">
                <img src="http://mutationmedia.net/COFFEEBEN/img/6.jpg" id="menuImage"/>
            </div>

            <div id="menuContainer">
                <div id="menuInnerContainer1">
                    <div id="menuInnerContainer2">
                        <div id="menuInnerContainer3">
                            <div id="menuTitleBlock">
                                <img id="waves" src="http://mutationmedia.net/COFFEEBEN/img/waves-light.png" alt=""/>
                                <h1 id="menuTitle">DISCOVER MENU</h1>
                                <span id="menuTitleHeading">Delicious Drinks and Pastry</span>
                            </div>
                            <p id="menuPara">Coffee lovers love the aroma of coffee especially in the morning <br/>because coffee has a way to brighten moods.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default menu;