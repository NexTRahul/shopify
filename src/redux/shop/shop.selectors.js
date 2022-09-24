import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectDCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsPreview = createSelector(
  [selectDCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollections = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) => collection[collectionUrlParam])
  );
