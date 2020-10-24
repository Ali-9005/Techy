import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//pages

import Error from "./pages/Error";
import Home from "./pages/Home";
import Quizes from "./pages/Quizes";
import Login from "./pages/Login";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Shop
import Shop from "./components/Shop/Shop";
import Cart from "./components/Shop/Cart";


import AuthProvider from "./contexts/AuthContext";
import { list } from "cart-localstorage";


// const firestore = fire.firestore();

function App() {
  const [cartNumber, setCartNumber] = useState(list().length);
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar cartNumber={cartNumber} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" render={() => <Shop  cartNumber={cartNumber} setCartNumber={setCartNumber} />} />
            <Route path="/cart" render={() => <Cart cartNumber={cartNumber} setCartNumber={setCartNumber} />} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/quizes" exact component={Quizes} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
