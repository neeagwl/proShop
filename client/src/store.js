import {combineReducers,applyMiddleware, createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer, productCreateReviewReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';
import {userDetailsReducer, userLoginReducer,
    userRegisterReducer, updateProfileReducer,userListReducer, userDeleteReducer} from './reducers/userReducer';
import {createOrderReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer} from './reducers/orderReducers';    

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productCreateReview: productCreateReviewReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile : updateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    orderCreate : createOrderReducer,
    orderDetails : orderDetailsReducer,
    orderPay : orderPayReducer,
    orderListMy : orderListMyReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems')? 
JSON.parse(
    localStorage.getItem('cartItems'))
    :[]

const userInfoFromStorage = localStorage.getItem('userInfo')? 
JSON.parse(
    localStorage.getItem('userInfo'))
    :null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')? 
JSON.parse(
    localStorage.getItem('shippingAddress'))
:{} 

const initialState={
    cart:
    {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: {userInfo: userInfoFromStorage}
};

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store


