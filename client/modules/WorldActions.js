import getBrowserLanguage from 'get-browser-language'

export const setBrowserLanguageCode = (languageCode) => (dispatch) => {
  dispatch(_successSetLanguageCode(languageCode))
}

export const detectBrowserLanguage = () => (dispatch) => {
  const lang = getBrowserLanguage();
  if (lang) {
    console.log(lang)
    dispatch(_successDetectBrowserLanguage(lang))
  }
}

const _successDetectBrowserLanguage = (payload) => ({
  type: 'SUCCESS_DETECT_BROWSER_LANGUAGE',
  payload,
})

const _successSetLanguageCode = (payload) => ({
  type: 'SUCCESS_SET_LANGUAGE_CODE',
  payload,
})

export const setMapMarkerRequest = (markerPosition) => (dispatch) => {
  dispatch(_requestSetMapMarker(markerPosition))
}

const _requestSetMapMarker = (markerPosition) => ({
  type: 'REQUEST_SET_MAP_MARKER',
  markerPosition,
})
