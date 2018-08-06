import React from 'react';
import NavBarItems from './navBarItems';

let navBarStyle={
    display:"block",
}

const navBar=()=>{
    
    return(
        
        <header id="navBar" className="header default" style={navBarStyle}>

            <div className=" left-part">
                <a className="logo scroll" href="#wrapper">
                    <img src="http://mutationmedia.net/COFFEEBEN/img/logo.png" alt=""/>
                </a>
            </div>

            <div className="right-part">
                <nav className="main-nav">

                    <div class="toggle-mobile-but">
                        <a href="#" class="mobile-but">
                            <div class="lines"/>
                        </a>
                    </div>

                    <ul className="main-menu list-inline">
                        <NavBarItems refer="#about"       name="about"/>
                        <NavBarItems refer="#menu"        name="menu"/>
                        <NavBarItems refer="#offer"       name="offer"/>
                        <NavBarItems refer="#location"    name="location"/>
                        <NavBarItems refer="#reservation" name="reservation"/>
                        <NavBarItems refer="#gallery"     name="gallery"/>
                        <NavBarItems refer="#contact"     name="contact"/>
                    </ul>

                </nav>
            </div>

        </header>
    )
}

export default navBar;