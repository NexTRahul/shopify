import React, { useContext } from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import CollectionsContext from "../../context/collections/collections.context";
import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const { collectionId } = useParams();
  const collection = collections.find(
    (collection) => collection.routeName === collectionId
  );
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title} </h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
