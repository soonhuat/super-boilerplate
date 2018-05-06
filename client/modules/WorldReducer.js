const initialState = {
  browserLanguageCode: '',
}

const WorldReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_SET_LANGUAGE_CODE':
      return Object.assign({}, state, {
        browserLanguageCode: action.payload,
      })
    case 'REQUEST_SET_MAP_MARKER':
      return Object.assign({}, state, {
        markerPosition: action.markerPosition,
      })
    case 'SUCCESS_DETECT_BROWSER_LANGUAGE':
      return Object.assign({}, state, {
        browserLanguageCode: action.payload,
      })
    default:
      return state;
  }
}

export default WorldReducer
