// Actions
const DATA_GET_START = "ducks/data/DATA_GET_START";
const DATA_GET_SUCCESS = "ducks/data/DATA_GET_SUCCESS";
const DATA_GET_FAIL = "ducks/data/DATA_GET_FAIL";
const DATA_POST_START = "ducks/data/DATA_POST_START";
const DATA_POST_SUCCESS = "ducks/data/DATA_POST_SUCCESS";
const DATA_POST_FAIL = "ducks/data/DATA_POST_FAIL";

// Reducer
export default function reducer(
  state = { loading: false, tokens: null, error: null, information: [],input:[] },
  action = {}
) {
  switch (action.type) {
    case DATA_GET_START:
      return {
        ...state,
        loading: true,
      };
    case DATA_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        information: action.payload,
      };

    case DATA_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case DATA_POST_START:
        return {
          ...state,
          loading: true,
        };
      case DATA_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          input: action.payload,
        };
  
      case DATA_POST_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

    default:
      return state;
  }
}

// Action Creators
export function getDataStart() {
  return { type: DATA_GET_START };
}

export function getDataSuccess(data) {
  return { type: DATA_GET_SUCCESS, payload: data };
}

export function getDataFail(error) {
  return { type: DATA_GET_FAIL, payload: error };
}

export function postDataStart() {
  return { type: DATA_POST_START };
}

export function postDataSuccess(data) {
  return { type: DATA_POST_SUCCESS, payload: data };
}

export function postDataFail(error) {
  return { type: DATA_POST_FAIL, payload: error };
}

export function getData() {
  return async (dispatch) => {
    dispatch(getDataStart());
    //Do CITY and dispatch accordingly

    try {
      let response = await fetch(`http://www.mocky.io/v2/5b97533d30000070000bd533`);

      let json = await response.json();

      dispatch(getDataSuccess(json));
    } catch (error) {
      dispatch(getDataFail());
    }
  };
}

export function postData(name,description) {
  return async (dispatch) => {
    dispatch(postDataStart());
    //Do CITY and dispatch accordingly

    try {
      let response = [{name:name},{description:description}]
      dispatch(postDataSuccess(response));
    } catch (error) {
      dispatch(postDataFail());
    }
  };


}