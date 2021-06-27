import React, { useState, Fragment } from "react";

import { requestHandler } from "../services/api";
import Response from "./Response";
import "../styles/MainWrapper.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as FaIcons from "react-icons/fa";

const MainContainer = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [apiAction, setApiAction] = useState("get");
  const [apiResponse, setApiResponse] = useState("");
  const [inputFields, setInputFields] = useState([
    { qp_key: "", qp_value: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ qp_key: "", qp_value: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "qp_key") {
      values[index].qp_key = event.target.value;
    } else {
      values[index].qp_value = event.target.value;
    }

    setInputFields(values);
  };

  const handleChange = (event) => {
    const target = event.target;
    console.log(target.name, target.value);
    switch (target.name) {
      case "apiUrl":
        setApiUrl(target.value);
        break;

      case "apiAction":
        setApiAction(target.value);
        break;

      default:
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let apiData = {};
    for (const { qp_key: qp_key, qp_value: qp_value } of inputFields) {
      apiData[qp_key] = qp_value;
    }
    const resp = await requestHandler({
      apiUrl: apiUrl,
      apiAction: apiAction,
      apiData: apiData,
    });
    setApiResponse(resp);
  };

  return (
    <div className="MainWrapper">
      <div className="sidebar">
        <div className="sidebar-label"><span>Request</span></div>
        <div className="sidebar-label"><span>Response</span></div>
      </div>
      <div className="MainWrapperContent">
        <div className="request">
          <div className="request-inner">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="method">
                  <div>
                    <select
                      name="apiAction"
                      value={apiAction}
                      onChange={handleChange}
                    >
                      <option value="get">GET</option>
                      <option value="post">POST</option>
                      <option value="put">PUT</option>
                      <option value="delete">DELETE</option>
                    </select>
                  </div>
                </li>
                <li className="apiUrl method">
                  <div>
                    <input
                      type="url"
                      name="apiUrl"
                      value={apiUrl}
                      onChange={handleChange}
                      placeholder="https://httpbin.org/get"
                      required
                      className="urlInput"
                    />
                  </div>
                </li>
                <li className="send method">
                  <div>
                    <button className="Rbutton"> Send </button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          <div className="ParamTabs">
            <Tabs>
              <TabList>
                <Tab>Param</Tab>
                <Tab>Headers</Tab>
              </TabList>

              <TabPanel>
                <div className="query_param">
                  <div className="query_param_inputs">
                    <div className="TabContentLabelContainer">
                      <label className="TabContentLabel">Query Params</label>
                      <span onClick={() => handleAddFields()}>
                        <FaIcons.FaPlus
                          size="0.8em"
                          color="#ff5722"
                          className="AddIcon"
                        />
                      </span>
                    </div>

                    {inputFields.map((inputField, index) => (
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
                              onChange={(event) =>
                                handleInputChange(index, event)
                              }
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
                              onChange={(event) =>
                                handleInputChange(index, event)
                              }
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
                    ))}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        <div className="response">
          <Response data={apiResponse} />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
