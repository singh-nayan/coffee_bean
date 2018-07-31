import React from 'react';
import NavBar from './NavBar';
import InnerHero from './innerHero';  
import HeroMainSlider from './heroMainSlider';
import './hero.css';

const hero=()=>{
    return (
        <section className="hero">
            <HeroMainSlider/>
            <NavBar/>
            <InnerHero/>
            <div className="polySlider"></div>
        </section>
    )
}

export default hero;