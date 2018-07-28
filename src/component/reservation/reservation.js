import React from 'react';
import './reservation.css';

const reservation=()=>{
    return(
        <section id="reservation">
            <div id="reservationContainer">
                <div id="reservationContent">
                    <div id="reservationText">
                        <h1 id="reservationHeading">MAKE A RESERVATION</h1>
                        <p id="reservationDetail">In any event, CoffeeBen staff will be thrilled to welcome you! We are impatient to keep possible waiting periods as short as possible for you, Have a pleasant coffee experience !</p>
                        <h4 id="reservationInfo">FOR GROUP RESERVATIONS OVER 10 PEOPLE PLEASE CONTACT US VIA MAIL OR GIVE US A CALL.</h4>
                        <a id="reservationContactButton" href="#contact">CONTACT US</a>
                    </div>
                    <div id="reservationImageSection">
                        <img id="reservationImage" src="http://mutationmedia.net/COFFEEBEN/img/15.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default reservation;