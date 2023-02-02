import React from "react";
import "./preview-collection.style.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { useNavigate } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/shop/${routeName}`);
  };
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={handleNavigate}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
