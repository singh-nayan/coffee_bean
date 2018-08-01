import React from 'react';
import {render} from 'react-dom';
import CoffeeBen from './CoffeeBen'
import { createStore, applyMiddleware, compose } from 'redux';// needed for store
import {mainMenuReducer} from './reducers/mainMenuReducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function configureStore() {
    return createStore(   
        mainMenuReducer,
        compose(
            window.devToolsExtension ? window.devToolsExtension() : (f) => f
        )
    );
}
const store = configureStore(); 

render(<CoffeeBen store={store}/>, document.getElementById('root'));