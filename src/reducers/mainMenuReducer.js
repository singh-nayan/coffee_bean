import {mainMenuInitialState,coldBeverageTitles,hotBeverageTitles,pastryTitles} from './reducersData/mainMenuReducerData';

export const mainMenuReducer=(state=mainMenuInitialState,action)=>{
    switch(action.type){

        case "coldBeverage":
            return coldBeverageTitles
            
        case "hotBeverage":
            return hotBeverageTitles
        
        case "pastry":
            return pastryTitles

        default: 
            return state;
    }
}

