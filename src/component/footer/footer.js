import React from 'react';
import FooterItems from './footerItems';
import { FaFacebook,FaInstagram,FaAngleUp} from 'react-icons/fa';


const footer=()=>{
    return(
        <footer className="footer gap-one-top-sm gap-one-bottom-md ">
            
            <div className="poly-footer"/>
        
            <div className="container">
                <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-6 col-lg-5 text-center ">
                        <div className="block-content logo">
                            <img className="mb-0" src="http://mutationmedia.net/COFFEEBEN/img/logo.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-between align-items-center mt-5">
                    
                    <div className="col-md-4 text-md-left">
                        <small className="small">
                            <span>© 2018 Mutation Media all rights reserved.</span><br/>
                            <span>Product of</span> mutationthemes.
                        </small>
                    </div>
                    
                    <div className="col-md-4 text-md-center">
                        <ul className="block-social list-inline mb-30">
                            <FooterItems icon={<FaFacebook/>}/>
                            <FooterItems icon={<FaInstagram/>}/>
                            <FooterItems icon={<FaAngleUp/>}/>
                        </ul>
                    </div>
                    
                    <div className="col-md-4 text-md-right">
                        <small className="small text-left">
                                <span>Font generated by</span>
                                <a href="https://www.flaticon.com" target="blank">flaticon.com</a><br/>
                                <span>Under</span>
                                <a href="http://creativecommons.org/licenses/by/3.0/" target="blank">CC</a>:
                                <a data-file="001-toast" href="https://www.flaticon.com/authors/smalllikeart" target="blank">smalllikeart</a>
                        </small>
                    </div>
                
                </div>
            </div>

        </footer>
    )
}

export default footer;