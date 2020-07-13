import { createSelector } from "reselect";

const SelectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [SelectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const SelectCollection = (collectionUrlParm) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParm]
  );
