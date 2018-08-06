import React from 'react';

const reservation=()=>{
    return(
        <section id="reservation" className="main pattern">
            <div className="container">
                <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-6 col-lg-5 text-center text-md-left ">
                        <h1 className="uppercase mb-4">MAKE A RESERVATION</h1>
                        <p className="lead">In any event, CoffeeBen staff will be thrilled to welcome you! We are impatient to keep possible waiting periods as short as possible for you, Have a pleasant coffee experience !</p>
                        <h4 className="alt-font mb-5 uppercase">FOR GROUP RESERVATIONS OVER 10 PEOPLE PLEASE CONTACT US VIA MAIL OR GIVE US A CALL.</h4>
                        <a className="btn btn-primary scroll" href="#contact" style={{"color": "#c2a482","backgroundColor": "#212932","border":"#c2a482"}}>CONTACT US</a>
                    </div>
                    <div className="col-8 col-md-6 col-lg-4">
                        <img className="img-fluclassName mb-0 box-shadow" src="http://mutationmedia.net/COFFEEBEN/img/15.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default reservation;