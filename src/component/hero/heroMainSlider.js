import React from 'react';

const heroMainSlider=()=>{
    return(
        <div className="main-slider slider flexislider">

            <ul className="slides">
                <li>
                    <div>
                        <img src="http://mutationmedia.net/COFFEEBEN/img/1.jpg" alt=""/>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="http://mutationmedia.net/COFFEEBEN/img/2.jpg" alt=""/>
                    </div>
                </li>
            </ul>

            <ol className="flex-control-nav flex-control-paging">
                <li>
                    <a >1</a>
                </li>
                <li>
                    <a >2</a>
                </li>
            </ol>

        </div>
    )
}

export default heroMainSlider;