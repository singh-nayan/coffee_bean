import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './component/navbar/navbar';
import Reservation from './component/reservation/reservation';
import Menu from './component/menu/menu';
import About from './component/about/about';

const App=()=>{
    return(
        <div className="App">
            {<About/>}
            {/*<Menu/>*/}
            {/*<Reservation/>*/}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));