import React from 'react';
import './css/main.css';
import './css/bootstrap.css';
import './css/flexislider.css'
import Hero from './component/hero/hero';
import Reservation from './component/reservation/reservation';
import Menu from './component/menu/menu';
import About from './component/about/about';
import MainMenu from './component/mainMenu/mainMenu';
import Gallery from './component/gallery/gallery';
import Location from './component/location/location';
import Offer from './component/offer/offer';
import Footer from './component/footer/footer';
import Contact from './component/contact/contact';
import Overlay from './component/overlay/overlay';
import $ from 'jquery';

$(function() {
    var header = $("#navBar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            header.addClass("header switched-header");
        } else {
            header.removeClass("header switched-header");
            header.addClass("header default");
        }
    });
  
});

const CoffeeBen=({store})=>{
    return(
        <div id="wrapper">
            {<Hero/>}
            {<About/>}
            {<Menu/>}
            {<MainMenu store={store}/>}
            {<Overlay/>}
            {<Offer/>}
            {<Location/>}
            {<Reservation/>}
            {<Gallery/>}
            {<Contact/>}
            {<Footer/>}
        </div>
    )
}

export default CoffeeBen;