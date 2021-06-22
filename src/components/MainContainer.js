import React, { useState } from "react";

import { requestHandler } from "../services/api";
import Response from './Response';
import "../styles/MainWrapper.css";

const MainContainer = () => {
   
const [apiUrl,setApiUrl] = useState('https://httpbin.org/get');
const [apiAction,setApiAction] = useState('get');
const [apiResponse,setApiResponse] = useState('');


const handleChange = (event) => {
    const target = event.target;
    console.log(target.name,target.value);
    setApiAction(target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
     const resp = await requestHandler({'apiUrl':apiUrl,'apiAction':apiAction});
    setApiResponse(resp);
 
  };

    return (
      <div className="MainWrapper">
        <div className="page-columns">
          <div className="request">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="method">
                  <label> Method </label>
                  <div>
                    <select name="apiAction"
                      value={apiAction} 
                      onChange={handleChange}>
                      <option value="get">GET</option>
                      <option value="post">POST</option>
                      <option value="put">PUT</option>
                      <option value="delete">DELETE</option>
                    </select>
                  </div>
                </li>
                <li className="apiUrl method">
                  <label> API URL</label>
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
                  <label> </label>
                  <div>
                    <button> Send </button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="response">
          <Response data={ apiResponse } />
        </div>
      </div>
    );
}

export default MainContainer;
