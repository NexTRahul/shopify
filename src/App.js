import React, {useEffect} from "react";
import { GlobalStyle } from "./global.styles";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { Routes, Route, Navigate } from "react-router-dom";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

const App =({ checkUserSession,currentUser })=>{
  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])
    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route
            exact
            path="/signin"
            element={ currentUser ? <Navigate to="/" /> : <SignInSignUp />
            }
          />
        </Routes>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
