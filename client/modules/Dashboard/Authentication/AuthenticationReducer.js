const initialState = {
  authData: {},
  isAuthenticated: false,
  signin: {
    isFetching: false,
    errorMessage: null,
  },
  signup: {
    isFetching: false,
    errorMessage: null,
  },
  logout: {
    isFetching: false,
    errorMessage: null,
  },
}

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SIGNIN':
      return Object.assign({}, state, {
        signin: {
          isFetching: true,
          errorMessage: null,
        },
      })
    case 'SUCCESS_SIGNIN':
      return Object.assign({}, state, {
        isAuthenticated: true,
        signin: {
          isFetching: false,
          errorMessage: null,
        },
        authData: action.payload,
      })
    case 'FAILED_SIGNIN':
      return Object.assign({}, state, {
        isAuthenticated: false,
        signin: {
          isFetching: false,
          errorMessage: action.errorMessage,
        },
      })
    case 'REQUEST_SIGNUP':
      return Object.assign({}, state, {
        signup: {
          isFetching: true,
          errorMessage: null,
        },
      })
    case 'SUCCESS_SIGNUP':
      return Object.assign({}, state, {
        signup: {
          isFetching: false,
          errorMessage: null,
        },
      })
    case 'FAILED_SIGNUP':
      return Object.assign({}, state, {
        signup: {
          isFetching: false,
          errorMessage: action.errorMessage,
        },
      })
    case 'REQEUST_REVOKE':
      return Object.assign({}, state, {
        signin: {
          isFetching: true,
        },
      })
    case 'SUCCESS_REVOKE':
      return Object.assign({}, state, {
        authData: action.payload,
        isAuthenticated: true,
        signin: {
          isFetching: false,
          errorMessage: null,
        },
      })
    case 'REQUEST_LOGOUT':
      return Object.assign({}, state, {
        logout: {
          isFetching: true,
        },
      })
    case 'SUCCESS_LOGOUT':
      return Object.assign({}, state, {
        authData: {},
        isAuthenticated: false,
        logout: {
          isFetching: false,
        },
      })
    case 'FAILED_LOGOUT':
      return Object.assign({}, state, {
        logout: {
          isFetching: false,
          errorMessage: action.errorMessage,
        },
      })
    default:
      return state;
  }
}

export default AuthenticationReducer
