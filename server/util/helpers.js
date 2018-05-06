
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import moment from 'moment'
import _ from 'lodash'
import azure from 'azure-storage'
import multiparty from 'multiparty'
import fileExt from 'file-extension'
import cuid from 'cuid'
import filename from 'file-name'
import config from '../config'

export function parseBoolean(bool) {
  if (bool === 'y') {
    return true
  }
  return false
}

export function parseYesNo(bool) {
  if (bool) {
    return 'y'
  }
  return 'n'
}

export function generateToken(user, expire) {
  const token = jwt.sign(user, config.superSecret, {
    expiresIn: expire, // expires in 24 hours
  })

  return token
}

export function compareSecret(user, secret, res) {
  if (!bcrypt.compareSync(secret, user.secret)) {
    res.status(400).json({
      message: 'Password is incorrect, please try again...'
    })
  }
  return user
}

export function setToken(req, token) {
  req.universalCookies.set('token', token, { path: '/' })
}

export function removeToken(req) {
  req.universalCookies.remove('token', { path: '/' })
}

export function getToken(req) {
  return req.universalCookies.get('token', { path: '/' })
}

export const parseMySQLDate = (date, isEndofDay = false) => {
  if (isEndofDay) {
    return moment.utc(moment(date).endOf('day')).format()
  }
  return moment.utc(date).format()
}

export const parseMySQLDateTime = (date) => {
  return moment(_.replace(date, /"/g, '')).format('YYYY-MM-DD HH:mm:ss')
}

export const isValidDate = (str) => {
  var d = moment(str)
  if (_.isInteger(_.toNumber(str))) return false
  if (d == null || !d.isValid()) return false
  return true
}

export const combineQuery = (params = {}, query = false) => {
  let whereClause = {}
  if (query) {
    const queryObj = _.omit(query, ['limit', 'offset', 'keyword'])
    _.forEach(queryObj, (value, key) => {
      if (value) {
        if (!isValidDate(value)) {
          whereClause = _.merge(whereClause, { [key]: value })
        } else {
          const date = parseMySQLDate(value)
          const endOfDate = parseMySQLDate(value, true)
          whereClause = _.merge(whereClause, { [key]: { $gte: date, $lte: endOfDate } })
        }
      }
    })
  }
  whereClause = _.merge(params, whereClause)
  return whereClause
}

export const pastDaysArray = (day, arr) => {
  if (day === 'All Time') {
    day = moment(new Date()).diff(moment(new Date(arr[0].day)), 'days')
  }
  let dateObj = {}
  let i
  for (i = 0; i < day; i++) {
    let date = new Date()
    date = moment(date).subtract(i, 'days').toDate()
    dateObj = _.assign(dateObj, { [moment(date).format('MMM D, YYYY')]: 0 })
    _.map(arr, (obj) => {
      dateObj = _.assign(dateObj, { [obj.day]: _.toInteger(obj.count) })
    })
  }
  return sortDateObj(dateObj)
}

const sortDateObj = (obj) => {
  let result = {}
  let keys = _.keys(obj)
  keys.sort(function compare(a, b) {
    var dateA = new Date(a)
    var dateB = new Date(b)
    return dateA - dateB
  })
  result = _.transform(keys, (n, name) => {
    n[name] = obj[name]
  }, {})
  return result
}

export const handleMultipartFormData = (req) => {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form()
    form.parse(req, (err, body, files) => {
      if (err) {
        return reject(err)
      }
      return resolve({
        body,
        files,
      })
    })
  })
}

export const uploadFile = (file) => {
  const ext = fileExt(file.originalFilename)
  const filenameOnly = filename(file.originalFilename)
  const task = `${filenameOnly}-${cuid()}.${ext}`
  const filepath = file.path
  const blobService = azure.createBlobService(config.gorgias.azureBlob.connectionString)
  const container = config.gorgias.azureBlob.container

  return new Promise((resolve, reject) => {
    return blobService.createContainerIfNotExists(container, config.gorgias.azureBlob.accessRight, (error) => {
      if (error) return reject(error)
      return blobService.createBlockBlobFromLocalFile(
        container,
        task,
        filepath,
        (error) => {
          if (error) return reject(error)
          return resolve(task)
        }
      )
    })
  })
}
