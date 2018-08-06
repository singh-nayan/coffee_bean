import React from 'react';

let reservationStyle={
    heading:{
        fontSize:"1.875rem",
        fontWeight:"400"
    },

    button:{
        color: "#c2a482",
        backgroundColor: "#212932",
        border:"#c2a482",
        fontSize:".75rem",
        fontWeight:"700",
        "padding-top": "0.6875rem",
        "padding-right": "2.5rem",
        "padding-bottom": "0.6875rem",
        "padding-left": "2.5rem"
    }
    
}

const reservation=()=>{
    return(
        <section id="reservation" className="main pattern" style={{"backgroundImage":`url(http://mutationmedia.net/COFFEEBEN/img/pattern.png)`}}>
            <div className="container">
                <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-6 col-lg-5 text-center text-md-left ">
                        <h1 className="uppercase mb-4" style={reservationStyle.heading}>MAKE A RESERVATION</h1>
                        <p className="lead" style={{fontSize:"1rem"}}>In any event, CoffeeBen staff will be thrilled to welcome you! We are impatient to keep possible waiting periods as short as possible for you, Have a pleasant coffee experience !</p>
                        <h4 className="alt-font mb-5 uppercase" style={{fontSize:"1rem",fontWeight:"700"}}>FOR GROUP RESERVATIONS OVER 10 PEOPLE PLEASE CONTACT US VIA MAIL OR GIVE US A CALL.</h4>
                        <a className="btn btn-primary scroll" href="#contact" style={reservationStyle.button}>CONTACT US</a>
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