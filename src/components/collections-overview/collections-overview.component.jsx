import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from "../preview-collection/preview-collection.component";
import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const CollectionsOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
