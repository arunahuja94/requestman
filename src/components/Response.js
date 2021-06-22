import React from "react";
import "../styles/Response.css";

import ResponseCard from './ResponseCard';

const Response = (res) => {
  const { data, status } = res.data; 
  const headers = res.data.headers ? JSON.stringify(res.data.headers, null, 2) : '';

  return (
    <div className="ResponseWrapper">
      <label> Response for API Request </label>
      { status ?
        (
        <div className="output">
          <div>
            <label> Status </label>
            <input 
                type="text"
                name="status"
                readOnly="readOnly"
                className="resStatus"
                value={ status }
              />
          </div>

          { headers ? (
              <div>
              <label> Headers </label>
              <div className="headers"> { headers } </div>
            </div>
          ) : ''}

          <label> JSON Response </label>
          <ResponseCard data={ data } />
        </div>
        ) : null }
    </div>
  );
}
 
export default Response;
