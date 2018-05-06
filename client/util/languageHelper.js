import _ from 'lodash'
import moment from 'moment'
import language from '../config/language'

const defaultDetail = { name: '', description: '' }

export const getLocaleDetail = (data, propsOrLanguage, detailKey = 'details') => {
  if (_.isEmpty(data)) {
    return defaultDetail
  }

  let currentLanguageDetail = _.find(data[detailKey], (detail) => {
    return detail.language === propsOrLanguage || detail.language === propsOrLanguage.defaultLanguageCode
  })

  if (currentLanguageDetail) {
    return currentLanguageDetail
  } else if (!data.user || !data.user.details) {
    return defaultDetail
  }

  const userDefaultDetail = _.find(data.user.details, (detail) => {
    return detail.isDefault
  })
  currentLanguageDetail = _.find(data[detailKey], (detail) => {
    return detail.language === userDefaultDetail.language
  })
  return currentLanguageDetail || { name: '', description: '' }
}

export const isDefaultDetail = (data) => {
  return data === defaultDetail
}

export const getBrowserIsoLanguageCode = () => {
  const locale = moment().locale()
  return locale
}

export const getProfileLanguagesOrDefault = (profile) => {
  const languageArray = []

  if (_.isEmpty(profile) || _.isEmpty(profile.details)) {
    Object.keys(language).forEach((languageKey) => {
      languageArray.push({ key: languageKey, value: language[languageKey] })
    })
    return languageArray
  }

  profile.details.forEach((detail) => {
    const languageCode = detail.language
    const languageLabel = language[languageCode]
    if (!_.isUndefined(languageLabel)) {
      languageArray.push({ key: languageCode, value: languageLabel })
    }
  })

  return languageArray
}
