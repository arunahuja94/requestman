import React, { Fragment } from "react";
import "../styles/keyValueInput.css";
import * as FaIcons from "react-icons/fa";
const KeyvalueInput = ({inputField,index,handleInputChange,handleRemoveFields}) => {
  return (
    <Fragment key={`${inputField}~${index}`}>
      <div className="form-container">
        <div className="qp-form-group">
          <input
            type="text"
            className="form-control"
            id="qp_key"
            name="qp_key"
            value={inputField.qp_key}
            placeholder="key"
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
        <div className="qp-form-group">
          <input
            type="text"
            className="form-control"
            id="qp_value"
            name="qp_value"
            value={inputField.qp_value}
            placeholder="Value"
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
        <div className="qp-form-group-action">
          <span onClick={() => handleRemoveFields(index)}>
            <FaIcons.FaTrashAlt
              size="1em"
              color="#ff5722"
              className="TrashIcon"
            />
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default KeyvalueInput;