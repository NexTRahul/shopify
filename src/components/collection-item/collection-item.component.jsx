import React from "react";
import { connect } from "react-redux";

import CustomButtons from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";
import "./collection-item.style.scss";

const CollectionItem = ({ addItem, item }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButtons onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButtons>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
