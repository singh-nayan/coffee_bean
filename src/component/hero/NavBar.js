import React from 'react';

const navBar=()=>{
    return(
        <header className="header default">

            <div className=" left-part">
                <a className="logo scroll" href="#wrapper">
                    <img src="http://mutationmedia.net/COFFEEBEN/img/logo.png" alt=""/>
                </a>
            </div>

            <div className="right-part">
                <nav className="main-nav">
                    <ul className="main-menu list-inline">
                        <li>
                            <a className="scroll list-inline-item" href="#about">about</a>
                        </li>
                        <li>
                            <a className="scroll list-inline-item" href="#menu">menu</a>
                        </li>
                        <li>
                            <a className="scroll list-inline-item" href="#offer">offer</a>
                        </li>
                        <li>
                            <a className="scroll list-inline-item" href="#location">location</a>
                        </li>
                        <li>
                            <a className="scroll list-inline-item" href="#reservation">reservation</a>
                        </li>
                        <li>
                            <a className="scroll list-inline-item" href="#gallery">gallery</a>
                        </li>
                        <li>
                            <a className="scroll list-inline-item" href="#contact">contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default navBar;