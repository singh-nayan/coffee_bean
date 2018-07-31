import React from 'react';

const locationItems=({data})=>{
    return(
        <li className="col-lg-4 ">
            <div className="block-flip">
                
                <div className="block-flip-front">
                    <div className="block-inner-flip">
                        <div className="block-centred">
                            <div className="block-content-inner">
                                <h3 className=" mb-3 uppercase">{data.front.title}</h3>
                                <h6 className="alt-font uppercase ">{data.front.heading}</h6>
                                <p className="mb-4">{data.front.detail}</p>
                                <span className=" link uppercase underline">{data.front.footer}</span>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="block-flip-back">
                    <div className="block-inner-flip">
                        <div className="block-centred">
                            <div className="block-content-inner">
                                <h3 className=" mb-3 uppercase">{data.back.title}</h3>
                                <h6 className="alt-font uppercase ">{data.back.heading}</h6>
                                <p className="mb-4">{data.back.detail}</p>
                                <a className=" link uppercase" href={data.back.link} target="blank">{data.back.footer}</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default locationItems;