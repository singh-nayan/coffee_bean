import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import mainMenuAction from '../../actions/mainMenuActions';
import MainMenuContent from './mainMenuContent';

const mainMenuContainer=({titles,action})=>{

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-11 col-lg-10 ">
                    <div className="block-content  gap-one-top-lg">

                        <ul className="block-tabs">
                            <li onClick={action.coldBeverage}>COLD BEVERAGE</li>
                            <li onClick={action.hotBeverage}>HOT BEVERAGE</li>
                            <li onClick={action.pastry}>PASTRY</li>
                        </ul>

                        <ul className="block-tabs">
                            <li className="block-list mt-5">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <MainMenuContent title={titles.title1}/>
                                        <MainMenuContent title={titles.title2}/>
                                        <MainMenuContent title={titles.title3}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <MainMenuContent title={titles.title4}/>
                                        <MainMenuContent title={titles.title5}/>
                                        <MainMenuContent title={titles.title6}/>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        titles:state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        action:bindActionCreators(mainMenuAction,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( 
    mainMenuContainer
);
