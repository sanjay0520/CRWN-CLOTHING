import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { SelectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import withSpinner from "../../components/with-spinner/with-spinner.component.jsx";

import CollectionPage from "../collection/collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !SelectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
