import {combineReducers,applyMiddleware, createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')? 
JSON.parse(
    localStorage.getItem('cartItems'))
    :[]

const initialState={
    cart:
    {
        cartItems: cartItemsFromStorage
    }
};

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store


