import React from 'react';
import NavBar from './NavBar';
import InnerHero from './innerHero';  
import HeroMainSlider from './heroMainSlider';

const hero=()=>{
    return (
        <section className="hero">
            <h2 className="indent">Hero</h2>
            <HeroMainSlider/>
            <NavBar/>
            <InnerHero/>
            <div className="poly-slider"></div>
        </section>
    )
}

export default hero;