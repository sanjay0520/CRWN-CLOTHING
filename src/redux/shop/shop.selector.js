import { createSelector } from "reselect";

const SelectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [SelectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const SelectCollection = (collectionUrlParm) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParm] : null
  );

export const SelectIsCollectionFetching = createSelector(
  [SelectShop],
  (shop) => shop.isFetching
);

export const SelectIsCollectionLoaded = createSelector(
  [SelectShop],
  (shop) => !!shop.collections
);
