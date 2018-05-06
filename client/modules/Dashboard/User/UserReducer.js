const initialState = {
  isFetching: false,
  userList: [],
  message: null,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SET_USER_LIMIT':
      return Object.assign({}, state, {
        limit: action.limit,
        forcePage: 0,
      })
    case 'REQUEST_GET_ALL_USER_LIST':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'SUCCESS_GET_ALL_USER_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        userList: action.payload,
        message: null,
      })
    case 'FAILED_GET_ALL_USER_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        userList: [],
        message: action.errorMessage,
      })
    case 'REQUEST_GET_USER_LIST':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'SUCCESS_GET_USER_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        userList: action.payload,
        message: null,
        forcePage: undefined,
      })
    case 'FAILED_GET_USER_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        userList: [],
        message: action.errorMessage,
      })
    case 'REQUEST_GET_USER':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'SUCCESS_GET_USER':
      return Object.assign({}, state, {
        isFetching: false,
        profile: action.payload,
        message: null,
      })
    case 'FAILED_GET_USER':
      return Object.assign({}, state, {
        isFetching: false,
        profile: {},
        message: action.errorMessage,
      })
    case 'REQUEST_GET_USER_LANGUAGES':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'SUCCESS_GET_USER_LANGUAGES':
      return Object.assign({}, state, {
        isFetching: false,
        userLanguages: action.payload,
        message: null,
      })
    case 'FAILED_GET_USER_LANGUAGES':
      return Object.assign({}, state, {
        isFetching: false,
        userLanguages: [],
        message: action.errorMessage,
      })
    case 'REQUEST_CREATE_USER':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'SUCCESS_CREATE_USER':
      return Object.assign({}, state, {
        isFetching: false,
      })
    case 'FAILED_CREATE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        message: action.errorMessage,
      })
    case 'REQUEST_GET_INTEGRATION_PROFILE_LIST':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'SUCCESS_GET_INTEGRATION_PROFILE_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        profile: action.payload,
        message: null,
      })
    case 'FAILED_GET_INTEGRATION_PROFILE_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        profile: {},
        message: action.errorMessage,
      })
    case 'REQUEST_DELETE_USER':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'SUCCESS_DELETE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: true,
      })
    case 'FAILED_DELETE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: false,
        message: action.errorMessage,
      })
    default:
      return state;
  }
}

export default UserReducer
