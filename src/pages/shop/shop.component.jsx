import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component.jsx";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component.jsx";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
