import axios from 'axios'
import _ from 'lodash'
import { API_URL, HEADERS } from '../../../util/apiCaller'

export const getAllUserListRequest = () => (dispatch) => {
  dispatch(_requestGetAllUserList())
  return axios({
    method: 'GET',
    url: `${API_URL}/user/all`,
    headers: HEADERS,
  })
    .then((payload) => dispatch(_successGetAllUserList(payload.data)))
    .catch(errorMessage => dispatch(_failedGetAllUserList(errorMessage)))
}

const _requestGetAllUserList = () => ({
  type: 'REQUEST_GET_ALL_USER_LIST',
})

const _successGetAllUserList = (payload) => ({
  type: 'SUCCESS_GET_ALL_USER_LIST',
  payload,
})

const _failedGetAllUserList = (errorMessage) => ({
  type: 'FAILED_GET_ALL_USER_LIST',
  errorMessage,
})

export const getUserListRequest = (brandName = '', page = 1, limit = 10) => (dispatch) => {
  dispatch(_requestGetUserList())
  let url = `${API_URL}/user?page=${page}&limit=${limit}`
  if (brandName) {
    url += `&brandName=${brandName}`
  }
  return axios({
    method: 'GET',
    url,
    headers: HEADERS,
  })
    .then((payload) => dispatch(_successGetUserList(payload.data)))
    .catch(errorMessage => dispatch(_failedGetUserList(errorMessage)))
}

const _requestGetUserList = () => ({
  type: 'REQUEST_GET_USER_LIST',
})

const _successGetUserList = (payload) => ({
  type: 'SUCCESS_GET_USER_LIST',
  payload,
})

const _failedGetUserList = (errorMessage) => ({
  type: 'FAILED_GET_USER_LIST',
  errorMessage,
})

export const setUserLimitRequest = (limit) => (dispatch) => {
  dispatch(_requestSetUserLimit(limit))
}

const _requestSetUserLimit = (limit) => ({
  type: 'REQUEST_SET_USER_LIMIT',
  limit,
})

export const getUserRequest = (userId) => (dispatch) => {
  dispatch(_requestGetUser())
  return axios({
    method: 'GET',
    url: `${API_URL}/user/${userId}`,
    headers: HEADERS,
  })
    .then((payload) => dispatch(_successGetUser(payload.data)))
    .catch(errorMessage => dispatch(_failedGetUser(errorMessage)))
}

const _requestGetUser = () => ({
  type: 'REQUEST_GET_USER',
})

const _successGetUser = (payload) => ({
  type: 'SUCCESS_GET_USER',
  payload,
})

const _failedGetUser = (errorMessage) => ({
  type: 'FAILED_GET_USER',
  errorMessage,
})

export const getUserLanguages = (userId) => (dispatch) => {
  dispatch(_requestGetUserLanguages())
  return axios({
    method: 'GET',
    url: `${API_URL}/user/${userId}/languages`,
    headers: HEADERS,
  })
    .then((payload) => dispatch(_successGetUserLanguages(payload.data)))
    .catch(errorMessage => dispatch(_failedGetUserLanguages(errorMessage)))
}

const _requestGetUserLanguages = () => ({
  type: 'REQUEST_GET_USER_LANGUAGES',
})

const _successGetUserLanguages = (payload) => ({
  type: 'SUCCESS_GET_USER_LANGUAGES',
  payload,
})

const _failedGetUserLanguages = (errorMessage) => ({
  type: 'FAILED_GET_USER_LANGUAGES',
  errorMessage,
})

export const createUserRequest = (formData, history) => (dispatch) => {
  dispatch(_requestCreateUser())
  const isLogoUploadRequired = _hasUploadLogo(formData)
  const isPhotosUploadRequired = _hasUploadPhotos(formData)
  if (isLogoUploadRequired || isPhotosUploadRequired) {
    const uploadLogoPromise = _uploadLogo(formData, isLogoUploadRequired)
      .then(filename => {
        if (filename) {
          formData.logo = filename
        }
      })
      .catch(() => dispatch(_failedCreateUser()))

    const uploadPhotosPromise = _uploadPhotos(formData, isPhotosUploadRequired)
      .then()
      .catch(() => dispatch(_failedCreateUser()))

    Promise.all([uploadLogoPromise, uploadPhotosPromise])
      .then(() => {
        return _createUser(formData, dispatch, history)
      })
      .catch(() => dispatch(_failedCreateUser()))
  } else {
    return _createUser(formData, dispatch, history)
  }
}

const _createUser = (formData, dispatch, history) => {
  if (!formData.logo && formData.gorgiasLogo) {
    const gorgiasLinkParts = formData.gorgiasLogo.split('/')
    if (gorgiasLinkParts.length > 0) {
      formData.logo = gorgiasLinkParts[gorgiasLinkParts.length - 1]
    }
  }
  return axios({
    method: 'POST',
    url: `${API_URL}/user`,
    headers: HEADERS,
    data: JSON.stringify(formData),
  })
    .then(() => {
      dispatch(_successCreateUser())
      history.push('/dashboard/brand/admin')
    })
    .catch(() => dispatch(_failedCreateUser()))
}

const _uploadLogo = (body, isLogoUploadRequired) => {
  if (!isLogoUploadRequired) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  const formData = new FormData()
  return new Promise((resolve, reject) => {
    formData.append('logo', body.logo[0])
    formData.append('field', 'logo')
    return axios({
      method: 'POST',
      url: `${API_URL}/integration/uploadImage`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
      .then(res => resolve(res.data.filename))
      .catch(e => reject(e))
  })
}

const _uploadPhotos = (body, isPhotosUploadRequired) => {
  if (!isPhotosUploadRequired) {
    return new Promise((resolve) => {
      resolve()
    })
  }

  const uploadPhotoPromises = [];
  _.each(body.photos, (photo, index) => {
    uploadPhotoPromises.push(_uploadPhoto(photo, body.photos, index))
  })

  return Promise.all(uploadPhotoPromises)
    .then()
    .catch(e => _failedCreateUser(e))
}

const _uploadPhoto = (photo, photos, index) => {
  if (_.isString(photo[0])) {
    return new Promise((resolve) => {
      resolve(true)
    })
  }

  const formData = new FormData()
  return new Promise((resolve, reject) => {
    formData.append('photo', photo[0])
    formData.append('field', 'photo')
    return axios({
      method: 'POST',
      url: `${API_URL}/integration/uploadImage`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
      .then(res => {
        const filename = res.data.filename
        photos[index][0] = filename
        resolve(filename)
      })
      .catch(e => reject(e))
  })
}

const _requestCreateUser = () => ({
  type: 'REQUEST_CREATE_USER',
})

const _successCreateUser = () => ({
  type: 'SUCCESS_CREATE_USER',
})

const _failedCreateUser = (errorMessage) => ({
  type: 'FAILED_CREATE_USER',
  errorMessage,
})

const _hasUploadLogo = (formData) => {
  if (formData.logo && !_.isString(formData.logo) && formData.logo[0]) {
    return true
  }
  return false
}

const _hasUploadPhotos = (formData) => {
  if (!formData.photos || _.isEmpty(formData.photos[0])) {
    return false
  }
  return true
}

export const updateUserRequest = (formData, userId, history) => (dispatch) => {
  dispatch(_requestUpdateUser())
  const isLogoUploadRequired = _hasUploadLogo(formData)
  const isPhotosUploadRequired = _hasUploadPhotos(formData)
  if (isLogoUploadRequired || isPhotosUploadRequired) {
    const uploadLogoPromise = _uploadLogo(formData, isLogoUploadRequired)
      .then(filename => {
        if (filename) {
          formData.logo = filename
        }
      })
      .catch(() => dispatch(_failedUpdateUser()))

    const uploadPhotosPromise = _uploadPhotos(formData, isPhotosUploadRequired)
      .then()
      .catch(() => dispatch(_failedUpdateUser()))

    Promise.all([uploadLogoPromise, uploadPhotosPromise])
      .then(() => {
        return _updateUser(userId, formData, dispatch, history)
      })
      .catch(() => dispatch(_failedUpdateUser()))
  } else {
    return _updateUser(userId, formData, dispatch, history)
  }
}

const _updateUser = (userId, formData, dispatch, history) => {
  dispatch(_requestUpdateUser())
  return axios({
    method: 'PUT',
    url: `${API_URL}/user/${userId}`,
    headers: HEADERS,
    data: JSON.stringify(formData),
  })
    .then(() => {
      dispatch(_successUpdateUser())
      history.push('/dashboard/brand/admin')
    })
    .catch(() => dispatch(_failedUpdateUser()))
}

const _requestUpdateUser = () => ({
  type: 'REQUEST_UPDATE_USER',
})

const _successUpdateUser = () => ({
  type: 'SUCCESS_UPDATE_USER',
})

const _failedUpdateUser = (errorMessage) => ({
  type: 'FAILED_UPDATE_USER',
  errorMessage,
})

export const getIntegrationProfileListRequest = (page) => (dispatch) => {
  dispatch(_requestGetIntegrationProfileList())
  return axios({
    method: 'GET',
    url: `${API_URL}/integration/profile/${page}`,
    headers: HEADERS,
  })
    .then((payload) => dispatch(_successGetIntegrationProfileList(payload.data)))
    .catch(errorMessage => dispatch(_failedGetIntegrationProfileList(errorMessage)))
}

const _requestGetIntegrationProfileList = () => ({
  type: 'REQUEST_GET_INTEGRATION_PROFILE_LIST',
})

const _successGetIntegrationProfileList = (payload) => ({
  type: 'SUCCESS_GET_INTEGRATION_PROFILE_LIST',
  payload,
})

const _failedGetIntegrationProfileList = (errorMessage) => ({
  type: 'FAILED_GET_INTEGRATION_PROFILE_LIST',
  errorMessage,
})

export const deleteUserRequest = (userId, history) => (dispatch) => {
  dispatch(_requestDeleteUser())
  return axios({
    method: 'DELETE',
    url: `${API_URL}/user/${userId}`,
    headers: HEADERS,
  })
    .then(() => {
      dispatch(_successDeleteUser())
      history.push('/dashboard/brand/admin')
    })
    .catch(() => dispatch(_failedDeleteUser()))
}

const _requestDeleteUser = () => ({
  type: 'REQUEST_DELETE_USER',
})

const _successDeleteUser = () => ({
  type: 'SUCCESS_DELETE_USER',
})

const _failedDeleteUser = (errorMessage) => ({
  type: 'FAILED_DELETE_USER',
  errorMessage,
})
