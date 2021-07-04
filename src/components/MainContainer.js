import React, { useState } from "react";

import { requestHandler } from "../services/api";
import Response from "./Response";
import "../styles/MainWrapper.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import createRequestObject from "../utils/RequestPayload";
import Sidebar from "./SidebarContainer";
import RequestmanConstant from "../constant/RequestmanConstant";
import QueryParam from "../utils/QueryParam";

const MainContainer = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [apiAction, setApiAction] = useState(RequestmanConstant.API_METHOD.GET);
  const [apiResponse, setApiResponse] = useState("");
  const [inputFields, setInputFields] = useState(
    RequestmanConstant.KEY_VALUE_INPUT
  );

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
      case RequestmanConstant.REQUEST_FORM_API_URL:
        setApiUrl(target.value);
        break;

      case RequestmanConstant.REQUEST_FORM_API_ACTION:
        setApiAction(target.value);
        break;

      default:
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await requestHandler(
      createRequestObject({
        apiUrl: apiUrl,
        apiAction: apiAction,
        inputFields: inputFields,
      })
    );
    setApiResponse(resp);
  };

  return (
    <div className="MainWrapper">
      <Sidebar />
      <div className="MainWrapperContent">
        <div className="request">
          <div className="request-inner">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="method">
                  <div>
                    <select
                      name={RequestmanConstant.REQUEST_FORM_API_ACTION}
                      value={apiAction}
                      onChange={handleChange}
                    >
                      <option value={RequestmanConstant.API_METHOD.GET}>
                        {RequestmanConstant.API_METHOD.GET}
                      </option>
                      <option value={RequestmanConstant.API_METHOD.POST}>
                        {RequestmanConstant.API_METHOD.POST}
                      </option>
                      <option value={RequestmanConstant.API_METHOD.PUT}>
                        {RequestmanConstant.API_METHOD.PUT}
                      </option>
                      <option value={RequestmanConstant.API_METHOD.DELETE}>
                        {RequestmanConstant.API_METHOD.DELETE}
                      </option>
                    </select>
                  </div>
                </li>
                <li className="apiUrl method">
                  <div>
                    <input
                      type="url"
                      name={RequestmanConstant.REQUEST_FORM_API_URL}
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
                <QueryParam
                  handleAddFields={handleAddFields}
                  inputFields={inputFields}
                  handleInputChange={handleInputChange}
                  handleRemoveFields={handleRemoveFields}
                />
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
