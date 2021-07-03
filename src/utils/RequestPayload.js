import RequestmanConstant from "../constant/RequestmanConstant";

const createPayload = (type, inputFields) => {
  let apiDataWithPayload = {};
  let apiDataWithoutPayload = "";

  for (const { qp_key, qp_value } of inputFields) {
    if (type === RequestmanConstant.WITH_PAYLOAD) {
      if (qp_key !== "") {
        apiDataWithPayload[qp_key] = qp_value;
      }
    } else if (type === RequestmanConstant.WITHOUT_PAYLOAD) {
      if (qp_key !== "") {
        apiDataWithoutPayload +=
          apiDataWithoutPayload.length > 0
            ? `&${qp_key}=${qp_value}`
            : `?${qp_key}=${qp_value}`;
      }
    }
  }

  return apiDataWithoutPayload ? apiDataWithoutPayload : apiDataWithPayload;
};

const createRequestObject = ({ apiUrl, apiAction, inputFields }) => {
  let apiObject = {};
  switch (apiAction.toUpperCase()) {
    case RequestmanConstant.API_METHOD.POST:
    case RequestmanConstant.API_METHOD.PUT:
    case RequestmanConstant.API_METHOD.PATCH:
      apiObject = {
        apiUrl: apiUrl,
        apiAction: apiAction,
        apiData: createPayload(RequestmanConstant.WITH_PAYLOAD, inputFields),
      };
      break;
    case RequestmanConstant.API_METHOD.GET:
    case RequestmanConstant.API_METHOD.DELETE:
      apiObject = {
        apiUrl:
          apiUrl +
          "" +
          createPayload(RequestmanConstant.WITHOUT_PAYLOAD, inputFields),
        apiAction: apiAction,
      };
      break;
    default:
  }
  return apiObject;
};

export default createRequestObject;
