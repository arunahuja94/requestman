import axios from "axios";
const token = 'asasasas121212';
const api = axios.create({
  //baseURL: 'https://httpbin.org',
});

axios.interceptors.request.use( x => {
  // to avoid overwriting if another interceptor
  // already defined the same object (meta)
  x.meta = x.meta || {}
  x.meta.requestStartedAt = new Date().getTime();
  return x;
});

axios.interceptors.response.use( x => {
  x.responseTime = new Date().getTime() - x.config.meta.requestStartedAt;
  return x;
});

export const requestHandler = (requesData) => {
  return axios({
    method: requesData.apiAction,
    url: requesData.apiUrl,
    data: requesData.apiData || '',
    headers: { 'Accept': '*/*', 'Access-Control-Expose-Headers': '*',  'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token }
  }).then( (response) => {
    return response;
  }).catch( (error) => {
    const errorMsg = 'Network Error. Check console for more Errors';

    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      const resError = { 
        'data' : error.response.data ? error.response.data : errorMsg,
        'status' : error.response.status ? error.response.status : '400'
      };

      return resError;
    } else if (error.request) {
      console.log(error.request);
      const reqError ={
        'data' : errorMsg,
        'status' : '400'
      };

      return reqError;
    } else {
      console.log('Error', error.message);
      const reqError = {
        'data' : error.message ? error.message : errorMsg,
        'status' : '400'
      };

      return reqError;
    }
  });
}

export default api;
