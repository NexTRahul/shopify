import React from "react";
import "./cart-dropdown.styles.scss";

import CustomButtons from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

const CartDropdown = ({ cartItems, dispatch }) => { 
  let navigate = useNavigate();
  return(
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButtons onClick = {
      ()=>{ navigate('/checkout');
      dispatch(toggleCartHidden());
    }
    }>GO TO CHECKOUT</CustomButtons>
  </div>
);}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
