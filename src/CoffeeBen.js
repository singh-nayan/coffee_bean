import React from 'react';
import './index.css';
import './bootstrap.css';
import './main.css';
import Hero from './component/hero/hero';
import Reservation from './component/reservation/reservation';
import Menu from './component/menu/menu';
import About from './component/about/about';
import MainMenu from './component/mainMenu/mainMenu';

const CoffeeBen=({store})=>{
    return(
        <div className="wrapper">
            {/*<Hero/>*/}
            {<About/>}
            {<Menu/>}
            {<MainMenu store={store}/>}
            {/*<Reservation/>*/}
        </div>
    )
}

export default CoffeeBen;