import React from 'react'
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';

const App=()=> {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
        {/* <Route path="/order/:id/pay" component={PayScreen}/> */}
          <Route path="/order/:id" component={OrderScreen} exact/>
        <Route path='/placeorder'       component={PlaceOrderScreen}/>
        <Route path='/payment'       component={PaymentScreen}/>
        <Route path='/shipping'       component={ShippingScreen}/>
        <Route path='/register'       component={RegisterScreen}/>
          <Route path='/login'       component={LoginScreen}/>
          <Route path='/profile'     component={ProfileScreen}/>
          <Route path='/admin/userlist' component={UserListScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?'   component={CartScreen}/>
          <Route path='/'            component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
