import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputComponent } from '../../../../components/Forms'
import { required, minLength } from '../../../../util/formValidation'


const LoginFormComponent = (props) => {
  const { handleSubmit, submitLoginForm, isSubmitting } = props
  return (
      <div className="row d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 align-self-center">
          <div className="card card-block p-sm-5 p-md-2">
            <div className="card-body">
              <h1>Brandso <small className="">Dashboard</small></h1>
              <form onSubmit={handleSubmit(submitLoginForm)}>
                <Field
                  label="Username"
                  name="username"
                  component={InputComponent}
                  type="text"
                  validate={[required, minLength(4)]}
                />
                <Field
                  label="Password"
                  name="password"
                  component={InputComponent}
                  type="password"
                  validate={[required, minLength(6)]}
                />
                <button className="btn btn-primary btn-block pull-right" type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default reduxForm({
  form: 'LoginFormComponent',
})(LoginFormComponent)
