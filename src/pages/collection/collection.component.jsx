import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component.jsx";

import { SelectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            className="collection-item"
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: SelectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
