import React from 'react';
import MainMenuContainer from './mainMenuContainer'; 
import './mainMenu.css';

const mainMenu=({store})=>{
    return(
        <section id="mainMenu">

            <div className="mainMenuBckgImage background-img">
                <img src="http://mutationmedia.net/COFFEEBEN/img/16.png" alt=""/>
            </div>

            <MainMenuContainer store={store}/>
            
        </section>
    )
}

export default mainMenu;