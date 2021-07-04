import React from "react";
import "../styles/keyValueInput.css";
import * as FaIcons from "react-icons/fa";
import KeyvalueInput from "../utils/keyValueInput";
import "../styles/QueryParam.css";

const QueryParam = ({
  handleAddFields,
  inputFields,
  handleInputChange,
  handleRemoveFields,
}) => {
  return (
    <div className="query_param">
      <div className="query_param_inputs">
        <div className="TabContentLabelContainer">
          <label className="TabContentLabel">Query Params</label>
          <span onClick={() => handleAddFields()}>
            <FaIcons.FaPlus size="0.8em" color="#ff5722" className="AddIcon" />
          </span>
        </div>

        {inputFields.map((inputField, index) => (
          <KeyvalueInput
            inputField={inputField}
            index={index}
            handleInputChange={handleInputChange}
            handleRemoveFields={handleRemoveFields}
          />
        ))}
      </div>
    </div>
  );
};

export default QueryParam;
