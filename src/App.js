import React from "react";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { Routes, Route, Navigate } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignInSignUp />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
