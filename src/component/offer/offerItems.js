import React from 'react';
import OfferItemsIcons from './offerItemsIcons';

const offerItems=({data,classN,style})=>{
    return(
        <li className={classN}>
            <div className="block-offer m-auto pt-5 pb-5">
                <ul className="block-icon list-inline">               
                    <OfferItemsIcons data={data.icon1}/>
                    <OfferItemsIcons data={data.icon2}/>
                    <OfferItemsIcons data={data.icon3}/>
                </ul>
                <h4 className="uppercase">{data.title}</h4>
                <p className=" m-auto">{data.detail}</p>
            </div>
        </li>
    )
}

export default offerItems;