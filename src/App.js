import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login.js';
import Orders from './Orders.js';
import Payment from './Payment.js';
import Prime from './Prime.js';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HPwgWLvlpQOb4puRLpyBJ8pnG2DJ5AAeIyTkty8APywhLyzV9HtSW6gJqX0DAOyQnl1LKUvJ5u5nAXLKeVGkPrD00iqzdag5B');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // user just logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/prime">
            <Header/>
            <Prime/>
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
