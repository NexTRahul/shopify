import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectDCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsPreview = createSelector(
  [selectDCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollections = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
