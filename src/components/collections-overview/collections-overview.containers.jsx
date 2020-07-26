import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { SelectIsCollectionFetching } from "../../redux/shop/shop.selector";
import withSpinner from "../with-spinner/with-spinner.component.jsx";

import CollectionsOverview from "../collections-overview/collections-overview.component.jsx";

const mapToStateProps = createStructuredSelector({
  isLoading: SelectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapToStateProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
