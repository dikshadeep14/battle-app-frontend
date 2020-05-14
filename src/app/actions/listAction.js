import axios from 'axios';
import { baseUrl } from './apiConfig';

export function getList() {
  const url = `${baseUrl}/`
  return function (dispatch) { 
    axios.get(url)
      .then((response) => dispatch({
        type: "GET_LIST",
    payload: response.data
      })).catch((response) => dispatch({
        type: 'ERROR_API',
        error: response.error
      }))
  }
}

export function getSearchedData(data) {
  let url = `${baseUrl}/search`;
  if (Object.keys(data).length > 0) {
    const params = Object.keys(data).map(key => key + '=' + data[key]).join('&');
    url = `${baseUrl}/search?${params}`
  }
  
  return function (dispatch) {
    axios.get(url)
      .then((response) => dispatch({
        type: 'GET_SEARCHED_LIST',
        payload: response.data
      })).catch((response) => dispatch({
        type: 'ERROR_API',
        error: response.error
      }))
  }
}
