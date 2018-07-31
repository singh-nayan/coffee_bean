import React from 'react';
import HeroSlider from './heroSlider';
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
            <HeroSlider/>
        </section>
    )
}

export default hero;