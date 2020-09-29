import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home'
import Login from './Login'
import CheckOut from './CheckOut'
import Payement from './Payment'
import {auth} from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from './Actions/cartActionType';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Payment from './Payment'
import PaymentProcess from './PaymentProcess';

// stripe payment

const promise=loadStripe('pk_test_vwjt5Y0O6U6vUT3gMIrkX4p000EgBNBJjp')
function App() {
 const user= useSelector(state=>state.user)
 const dispatch=useDispatch();
  useEffect(()=>{

   const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
     
        dispatch({
          type:SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:SET_USER,
          user:null
        })
      }
    })

return()=>{
  //clean up
  unsubscribe();
}
  },[])

  console.log(user);
  return (
    <Router>
      <div className='app'>
        <Switch>
         
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
          <CheckOut/>
          </Route>
          <Route exact path='/payment'>
            <Payment/>
          </Route>
          <Route path='/process'>
            <Elements stripe={promise}>
            <PaymentProcess/>
            </Elements>
            
          </Route>
          
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
         
        </Switch>

      </div>

    </Router>
  
  );
}

export default App;
