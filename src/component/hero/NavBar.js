import React from 'react';

const navBar=()=>{
    return(
        <header className="navBar">
            <div className="left">
                <a className="coffeeImage" href="#hero">
                    <img clssName="coffeeLogo" src="http://mutationmedia.net/COFFEEBEN/img/logo.png" alt=""/>
                </a>
            </div>
            <div className="right">
                <div className="mainNav">
                    <ul className="mainNavItems">
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default navBar;