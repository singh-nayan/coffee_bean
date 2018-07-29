import React from 'react';
import HeroSlider from './heroSlider';
import NavBar from './NavBar';
import InnerHero from './innerHero';  
import './hero.css';

const hero=()=>{
    return (
        <section id="hero">
            <NavBar/>
            <InnerHero/>
            <HeroSlider/>
        </section>
    )
}

export default hero;