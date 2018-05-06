import axios from 'axios'
import { API_URL, HEADERS } from '../../../util/apiCaller'

export const signinRequest = (body) => (dispatch) => {
  dispatch(_requestSignin())
  return axios({
    method: 'POST',
    url: `${API_URL}/signin`,
    headers: HEADERS,
    data: JSON.stringify(body),
  })
  .then(payload => dispatch(_successSignin(payload.data.authData)))
  .catch(err => _failedSignin(err))
}

const _requestSignin = () => ({
  type: 'REQUEST_SIGNIN',
})

const _successSignin = (payload) => ({
  type: 'SUCCESS_SIGNIN',
  payload,
})

const _failedSignin = (errorMessage) => ({
  type: 'FAILED_SIGNIN',
  errorMessage,
})

export const signupRequest = (body) => (dispatch) => {
  dispatch(_requestSignup())
  return axios({
    method: 'POST',
    url: `${API_URL}/signup`,
    headers: HEADERS,
    data: JSON.stringify(body),
  })
  .then(payload => _successSignup(payload))
  .catch(err => _failedSignup(err))
}

const _requestSignup = () => ({
  type: 'REQUEST_SIGNUP',
})

const _successSignup = (payload) => ({
  type: 'SUCCESS_SIGNUP',
  payload,
})

const _failedSignup = (errorMessage) => ({
  type: 'FAILED_SIGNUP',
  errorMessage,
})

export const isTokenValid = () => {
  return (dispatch) => {
    dispatch(_requestRevoke())
    return axios({
      method: 'POST',
      url: `${API_URL}/revoke`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.data)
    .then(data => {
      dispatch(_successRevoke(data.authData))
    })
    .catch(() => {
      dispatch(logoutUser())
    })
  }
}

const _requestRevoke = () => ({
  type: 'REQEUST_REVOKE',
})

const _successRevoke = (payload) => ({
  type: 'SUCCESS_REVOKE',
  payload,
})

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(_requestLogout())
    return axios({
      method: 'POST',
      url: `${API_URL}/signout`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      dispatch(_successLogout())
    })
    .catch(err => {
      dispatch(_failedLogout(err))
    })
  }
}

const _requestLogout = () => ({
  type: 'REQUEST_LOGOUT',
})

const _successLogout = () => ({
  type: 'SUCCESS_LOGOUT',
})

const _failedLogout = (errorMessage) => ({
  type: 'FAILED_LOGOUT',
  errorMessage,
})
