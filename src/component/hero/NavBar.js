import React from 'react';

const navBar=()=>{
    return(
        <header className="navBar">

            <div className="left scroll">
                <a className="coffeeImage scroll" href="#hero">
                    <img clssName="coffeeLogo" src="http://mutationmedia.net/COFFEEBEN/img/logo.png" alt=""/>
                </a>
            </div>

            <div className="right">
                <nav className="mainNav">
                    <ul className="mainNavItems">
                        <li className="mainNavItem">
                            <a className="scroll list-inline-item" href="#about">about</a>
                        </li>
                        <li className="mainNavItem">
                            <a className="scroll list-inline-item" href="#menu">menu</a>
                        </li>
                        <li className="mainNavItem">
                            <a className="scroll list-inline-item" href="#offer">offer</a>
                        </li>
                        <li className="mainNavItem">
                            <a className="scroll list-inline-item" href="#location">location</a>
                        </li>
                        <li className="mainNavItem">
                            <a className="scroll list-inline-item" href="#reservation">reservation</a>
                        </li>
                        <li className="mainNavItem">
                            <a className="scroll list-inline-item" href="#gallery">gallery</a>
                        </li>
                        <li className="mainNavItem">
                            <a className="scroll list-inline-item" href="#contact">contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default navBar;