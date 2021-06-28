import React from "react";
import "../styles/Response.css";

import ResponseCard from './ResponseCard';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const prettyBytes = require('pretty-bytes');
const Response = (res) => {
  const { data, status, statusText, responseTime } = res.data; 
  console.log(res.data,'data_resp');
  const headers = res.data.headers ? JSON.stringify(res.data.headers, null, 2) : '';
  const responseSize = res.data.headers ? prettyBytes(JSON.stringify(res.data).length + JSON.stringify(res.data.headers).length) : '';
  if(!status)
  {
return (<div className="empty-reponse"><img src="https://raw.githubusercontent.com/arunahuja94/requestman/master/postman.png" className="no-response" /></div>);
  }

  return (

    <div className="ResponseWrapper">


      <div className="response-viewer__meta">
    <div className="response-meta-viewer">
    <div className="response-meta-item response-network-meta">
    <i className="pm-icon pm-icon-sm pm-icon-normal network-icon secure"></i>
    </div>
    <div className="response-meta-item is-tooltip-container response-meta-item__status">
    <span className="response-meta-item-name">Status:</span>
    <span className="response-meta-item-value"><span className="response-meta-status-code">{status}</span>
    <span className="response-meta-status-code-desc">{statusText}</span></span>
    </div>
    <div className="response-meta-item is-tooltip-container">
    <span className="response-meta-item-name">Time:</span>
    <span className="response-time response-meta-item-value">{responseTime}</span>
    </div>
    <div className="response-meta-item is-tooltip-container">
    <span className="response-meta-item-name">Size:</span>
    <span className="response-meta-item-value">
    <span className="response-meta-size__total">{responseSize}</span>
    </span>
    </div>
    </div></div>

      <Tabs>
              <TabList>
                <Tab>Body</Tab>
                <Tab>Headers</Tab>
              </TabList>

              <TabPanel>
              <ResponseCard data={ data } />
              </TabPanel>
              <TabPanel>
                { headers ? (
              <div>
              <div className="headers"> { headers } </div>
            </div>
          ) : ''}
</TabPanel>
              </Tabs>
 
    </div>
  );
}
 
export default Response;
