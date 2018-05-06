// import Brand from '../models/brand'
import moment from 'moment'
import jwt from 'jsonwebtoken'
import config from '../config'
import { parseBoolean, generateToken, compareSecret, setToken, removeToken, getToken } from '../util/helpers'
import User from '../models/user'
import _ from 'lodash'

class Authentication {
  brandSignin(req, res) {
    const body = req.body
    User.findOne({ username: body.username })
    .then(user => {
      user.comparePassword(body.password, (err, isMatch) => {
        if (err) {
          return res.status(500).send(err)
        }
        if (isMatch) {
          const authData = user.toObject()
          const token = generateToken(authData, '1h')
          setToken(req, token)
          return res.status(200).json({
            authData,
            token,
          })
        }
        return res.status(403).json({
          message: 'Wrong email / password',
        })
      })
    })
  }

  revokeAuthentication(req, res) {
    const token = req.headers['x-access-token'] || getToken(req)
    jwt.verify(token, config.superSecret, (err, decoded) => {
      if (err) {
        removeToken(req)
        if (err.name === 'TokenExpiredError') {
          return res.status(403).send({
            message: 'Token has expired!',
          })
        }
        return res.status(403).send({
          message: 'Token malformed!',
        })
      }
      return User.findOne({
        _id: decoded._id,
      })
      .then((user) => {
        const authData = user.toObject()
        const token = generateToken(authData, '1h')
        setToken(req, token)
        res.status(200).json({
          message: 'Token is Valid!',
          authData,
          token,
        })
      })
    })
  }

  signout(req, res) {
    removeToken(req)
    return res.status(200).json({
      message: 'Sign out successfull!',
    })
  }

  validateRequest(req, res, next) {
    const excludes = [
      '/api/signin',
      '/api/revoke',
      '/api/signout',
      '/api/signup',
      '/api/forgot-password',
      // for testing
      '/api/user/adam/apple',
      '/api/step/adam/apple',
      '/api/step/*',
    ]
    if (_.includes(excludes, req.path)) {
      return next()
    } else {
      const token = req.headers['x-access-token'] || getToken(req)
      if (token) {
        jwt.verify(token, config.superSecret, (err, decoded) => {
          if (err) {
            return res.status(405).json({
              message: 'Method not allowed',
            })
          } else {
            req.authData = decoded
            if (decoded.active === 'y' && decoded.isDeleted === 'n') {
              next()
            } else {
              return res.status(401).json({
                message: 'Request not authorized',
              })
            }
          }
        })
      } else {
        return res.status(401).json({
          message: 'Request not authorized',
        })
      }
    }
  }
}

export default Authentication;
