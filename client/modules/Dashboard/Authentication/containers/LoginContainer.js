import React, { Component } from 'react'
import LoginFormComponent from '../components/LoginFormComponent'
import { signinRequest } from '../AuthenticationActions'

import { connect } from 'react-redux'

class LoginContainer extends Component {
  render() {
    return (
      <container>
        <LoginFormComponent submitLoginForm={this.props.signIn} />
      </container>
    )
  }
}

const mapStateToProps = (state) => ({
  authData: state.authentication.authData,
  isFetching: state.authentication.signin.isFetching,
  errorMessage: state.authentication.signin.errorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (formData) => {
    return dispatch(signinRequest(formData))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
