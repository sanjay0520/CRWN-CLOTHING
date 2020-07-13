import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./directory.style.scss";
import "../menu-item/menu-item-component";
import MenuItem from "../menu-item/menu-item-component";

import { SelectDirectorySection } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, title, ...otherPropsSection }) => (
      <MenuItem key={id} title={title} {...otherPropsSection} />
    ))}
  </div>
);

const mapPropsToState = createStructuredSelector({
  sections: SelectDirectorySection,
});

export default connect(mapPropsToState)(Directory);
