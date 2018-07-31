import React from 'react';
import MainMenuContainer from './mainMenuContainer'; 

let mainMenuStyle={
    backgroundImage:`url(http://mutationmedia.net/COFFEEBEN/img/16.png)`
}

const mainMenu=({store})=>{

    return(
        <section className="menu main pattern bg-light">

            <div className="background-img grain-img mainMenuBackground" style={mainMenuStyle}>
                <img src={mainMenuStyle} alt=""/>
            </div>

            <MainMenuContainer store={store}/>
            
        </section>
    )
}

export default mainMenu;