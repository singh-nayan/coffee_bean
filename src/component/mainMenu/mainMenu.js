import React from 'react';
import MainMenuContainer from './mainMenuContainer'; 

let mainMenuStyle2={
    backgroundImage:`url(http://mutationmedia.net/COFFEEBEN/img/16.png)`
}

let mainMenuStyle1={
    "background": "#fffceb url(http://mutationmedia.net/COFFEEBEN/img/pattern.png) center center repeat"
}

const mainMenu=({store})=>{

    return(
        <section className="menu main pattern bg-light" style={mainMenuStyle1} >

            <div className="background-img grain-img mainMenuBackground" style={mainMenuStyle2}>
                <img src={mainMenuStyle2} alt=""/>
            </div>

            <MainMenuContainer store={store}/>
            
        </section>
    )
}

export default mainMenu;