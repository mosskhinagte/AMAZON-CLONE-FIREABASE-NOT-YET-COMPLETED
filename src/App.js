import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_live_gwJ1W5qxjCVpzb0tx2AuMF54");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once whten the app component loadins
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        //THE USER JUST LOGGED IN /THE ETC
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out.
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
