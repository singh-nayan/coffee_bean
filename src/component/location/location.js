import React from 'react' ;
import LocationItems from './locationItems'; 
import {NYData,chicagoData,brooklynData} from './location data';

let locationStyle={
    backgroundImage:`url(http://mutationmedia.net/COFFEEBEN/img/9.jpg)`,
}

const location=()=>{

    return(
        <section id="location" className="location overlay divider">

            <div className="background-img" style={locationStyle}>
                <img src="http://mutationmedia.net/COFFEEBEN/img/9.jpg"/>
            </div>

            <div className="container">
                <ul className="block-location  row front-p">
                    <LocationItems data={chicagoData}/>
                    <LocationItems data={brooklynData}/>
                    <LocationItems data={NYData}/>
                </ul>
            </div>

        </section>
    )
}

export default location;