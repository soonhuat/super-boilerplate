// import callApi from '../../util/apiCaller';
import { API_URL, HEADERS } from '../../util/apiCaller'
import axios from 'axios'

export const addPostRequest = (body) => (dispatch) => {
  dispatch(_requestAddPost())
  axios({
    url: `${API_URL}/posts`,
    method: 'POST',
    headers: HEADERS,
    data: JSON.stringify(body)
  })
  .then(() => {
    return dispatch(_successAddPost())
  })
  .catch(err => {
    return dispatch(_failedAddPost(err));
  })
}

const _requestAddPost = () => ({
  type: 'REQEUST_ADD_POST',
})

const _successAddPost = () => ({
  type: 'SUCCESS_ADD_POST',
})

const _failedAddPost = (message) => ({
  type: 'FAILED_ADD_POST',
  message,
})
