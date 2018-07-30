import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import mainMenuAction from '../../actions/mainMenuActions';
import MainMenuContent from './mainMenuContent';

const mainMenuContainer=({titles,action})=>{

    let mainMenuConatainerPara= "Mango, Tropical Juices and a Hint of Coconut Blended with Ice and Swirled with Raspberry Puree."

    return(
        <div className="mainMenuContainer">
            <div className="mainMenuInnerContainer1">
                <div className="mainMenuInnerContainer2">
                    <div className="mainMenuInnerContainer3">

                        <ul className="blockTabs">
                            <li onClick={action.coldBeverage}>COLD BEVERAGE</li>
                            <li onClick={action.hotBeverage}>HOT BEVERAGE</li>
                            <li onClick={action.pastry}>PASTRY</li>
                        </ul>

                        <ul className="blockTabs">
                            <li className="blockList">
                                <div className="blockRow">
                                    <div className="blockRowColumn">
                                        <div className="blockContent">
                                            <h5>{titles.title1}</h5>
                                            <p>{mainMenuConatainerPara}</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="blockRowColumn">

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
