import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Hero from './component/hero/hero';
import Reservation from './component/reservation/reservation';
import Menu from './component/menu/menu';
import About from './component/about/about';
import MainMenu from './component/mainMenu/mainMenu';

const CoffeeBen=({store})=>{
    return(
        <div className="App">
            {/*<Hero/>}
            {<About/>}
            {<Menu/>*/}
            {<MainMenu store={store}/>}
            {/*<Reservation/>*/}
        </div>
    )
}

export default CoffeeBen;