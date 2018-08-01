import React from 'react';
import Mapp from './map';
import Detail from './detail';

const contact=()=>{
    return(
        <section id="contact" className="contact gap-after large-space bg-dark">
        <Mapp/>
        <Detail/>
        <div className="poly-contact"/>
        </section>
    )
}

export default contact;