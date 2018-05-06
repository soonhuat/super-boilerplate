import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm, FieldArray } from 'redux-form'
import Select, { Async } from 'react-select';
import Collapsible from 'react-collapsible';
import Button from '../../../../components/Button'
import { InputComponent, ImageDropZone } from '../../../../components/Forms'
import { required } from '../../../../util/formValidation'
import BrandDetailComponent from './BrandDetailComponent'
import BrandPhotosComponent from './BrandPhotosComponent'
import { API_URL } from '../../../../util/apiCaller'
import axios from 'axios'

class BrandAdminEditFormComponent extends Component {
  render() {
    const { isSubmitting, isEditMode, getProfiles, getSelectProfile, onSelectProfile, deleteProfile, handleSubmit, submitBrandAdminForm, fallbackLogo } = this.props
    return (
      <form onSubmit={handleSubmit(submitBrandAdminForm)}>
        <div className="card mb-3">
          <Collapsible trigger="Credentail and Role" transitionTime={200} open>
            <div className="card-body">
              <Field name="username" component={InputComponent} label="Username" type="text" className="form-control" disabled={isEditMode} validate={[required]} />
              <Field name="password" component={InputComponent} label="Password" type="password" className="form-control" disabled={isEditMode} validate={[required]} />
              <Field name="slug" component={InputComponent} label="Slug" type="text" className="form-control" />
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <div className="custom-controls-stacked">
                  <label className="custom-control custom-radio">
                    <Field name="role" className="form-check-input" type="radio" value="visitor" component="input" />
                    <span className="custom-control-description"> Customer</span>
                  </label>
                  <label className="custom-control custom-radio">
                    <Field name="role" className="form-check-input" type="radio" value="brand" component="input" />
                    <span className="custom-control-description"> Brand</span>
                  </label>
                  <label className="custom-control custom-radio">
                    <Field name="role" className="form-check-input" type="radio" value="admin" component="input" />
                    <span className="custom-control-description"> Master Admin</span>
                  </label>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>

        <div className="card mb-3">
          <Collapsible trigger="Gorgias Information" transitionTime={200}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="gorgias-profile">Gorgias Profile</label>
                <Select.Async
                  simpleValue
                  clearable
                  searchable
                  autoload={false}
                  openOnClick={false}
                  id="gorgias-profile"
                  ref="gorgiasProfile"
                  name="gorgias-profile"
                  loadOptions={getProfiles}
                  value={getSelectProfile()}
                  onChange={onSelectProfile}
                  disabled={isEditMode}
                />
              </div>
              <Field name="phone" component={InputComponent} type="text" className="form-control" label="Phone" validate={[required]} />
            </div>
          </Collapsible>
        </div>

        <div className="card mb-3">
          <Collapsible trigger="Detail" transitionTime={200}>
            <div className="card-body">
              <FieldArray name="details" component={BrandDetailComponent} />
            </div>
          </Collapsible>
        </div>

        <div className="card mb-3">
          <Collapsible trigger="Picture" transitionTime={200}>
            <div className="card-body">
              <Field label="Logo" name="logo" component={ImageDropZone} fallbackValue={fallbackLogo} />
              <div className="clearfix"></div>
              <FieldArray name="photos" component={BrandPhotosComponent} />
            </div>
          </Collapsible>
        </div>

        <div className="card mb-3">
          <Collapsible trigger="Correspond Information" transitionTime={200}>
            <div className="card-body">
              <Field name="correspondName" component={InputComponent} type="text" className="form-control" label="Correspond Name" />
              <Field name="correspondEmail" component={InputComponent} type="text" className="form-control" label="Correspond Email" />
              <Field name="correspondPhone" component={InputComponent} type="text" className="form-control" label="Correspond Phone" />
            </div>
          </Collapsible>
        </div>
        <Button type="primary" text="Save" loading={isSubmitting} htmlType="submit" />
        <Button className="float-right" type="danger" text="Delete" loading={isSubmitting} htmlType="button" onClick={deleteProfile} />
      </form>
    )
  }
}

const checkSlugValidity = (values, dispatch, props, field) => {
  if (field !== 'slug') {
    return new Promise((resolve) => {
      resolve()
    })
  }

  return new Promise((resolve, reject) => {
    const slug = values.slug
    let userId = null
    if (props.initialValues) {
      userId = props.initialValues._id
    }
    return axios({
      method: 'POST',
      url: `${API_URL}/user/slug-validity`,
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        slug: slug || '',
        userId: userId || null,
      },
    })
      .then(payload => {
        if (!payload.data.isSlugAvailable) {
          resolve({ slug: payload.data.suggestion })
        } else {
          resolve()
        }
      })
  })
}

BrandAdminEditFormComponent = reduxForm({
  form: 'BrandAdminEditFormComponent',
  enableReinitialize: true,
  destroyOnUnmount: true,
  asyncValidate: checkSlugValidity,
  asyncBlurFields: ['slug'],
  multipartForm: true,
})(BrandAdminEditFormComponent)

const mapStateToProps = (state, props) => {
  return {
    initialValues: props.match.params.userId ? state.user.profile : { role: 'visitor', details: [{}] }
  }
}

export default withRouter(connect(mapStateToProps)(BrandAdminEditFormComponent))
