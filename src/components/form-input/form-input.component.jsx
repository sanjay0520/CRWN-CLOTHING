import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handelChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handelChange}
      {...otherProps}
    ></input>

    {label ? (
      <label className={`${otherProps.value.length} ? 'shrink': ''`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
