import React from "react";

import SHOP_DATA from "./shop.data.js";
//import CollectionPreview from "../../components/collection-preview/collection-preview-component";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...OtherCollectionProps }) => (
          <CollectionPreview
            key={id}
            title={OtherCollectionProps.title}
            items={OtherCollectionProps.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
