import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hero from './component/hero/hero';
import Reservation from './component/reservation/reservation';
import Menu from './component/menu/menu';
import About from './component/about/about';

const App=()=>{
    return(
        <div className="App">
            {<Hero/>}
            {/*<About/>*/}
            {/*<Menu/>*/}
            {/*<Reservation/>*/}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));