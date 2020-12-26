import {combineReducers,applyMiddleware, createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducers/productReducer';


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
});

const initialState={};

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
);


// const middleware =[thunk];

// const store = createStore(reducer,initialState,
//     composeWithDevTools(applyMiddleware(...middleware)));

export default store;    


/////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import { Provider } from 'react-redux';
// import { createStore ,applyMiddleware,compose} from 'redux';
// import thunk from 'redux-thunk';

// import reducers from './reducers';

// const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     , document.querySelector('#root'));