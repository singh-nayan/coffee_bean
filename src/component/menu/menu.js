import React from 'react';
import './menu.css';
const menu=()=>{

    return(
        <section id="menu" className="overlay divider bg-light">

            <div className="background-img menuImage">
                <img src="http://mutationmedia.net/COFFEEBEN/img/6.jpg" alt=""/>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9 ">
                        <div className="block-content text-center front-p">
                            <div className="block-title ">
                                <img className="waves" src="http://mutationmedia.net/COFFEEBEN/img/waves-light.png" alt=""/>
                                <h1 className="uppercase mb-0 text-white ">DISCOVER MENU</h1>
                                <span className="text-white">Delicious Drinks and Pastry</span>
                            </div>
                            <p className="lead text-white mt-4 mb-0">Coffee lovers love the aroma of coffee especially in the morning <br/>because coffee has a way to brighten moods.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default menu;