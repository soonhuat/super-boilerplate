import React, { Component } from 'react'
import { connect } from 'react-redux'
import { swal } from 'react-redux-sweetalert'
import _ from 'lodash'

import { getUserRequest, createUserRequest, updateUserRequest, deleteUserRequest } from '../UserActions'
import { getIntegrationProfilesRequest } from '../../Integration/IntegrationActions'
import BrandAdminEditFormComponent from '../components/BrandAdminEditFormComponent'

class BrandAdminEditContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {},
      authData: {},
      profiles: [],
      selectedProfile: {},
      selectedProfileId: 0,
      isEditMode: false,
      fallbackLogo: '',
    }
    this.onSelectProfile = this.onSelectProfile.bind(this)
    this.getSelectProfile = this.getSelectProfile.bind(this)
    this.submitBrandAdminForm = this.submitBrandAdminForm.bind(this)
  }

  componentWillMount() {
    const userId = this.props.match.params.userId
    if (userId) {
      this.setState({
        isEditMode: true,
      })

      this.props.getUser()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      profile: nextProps.profile,
      authData: nextProps.authData,
      profiles: nextProps.profiles,
    })
  }

  onSelectProfile = (profileId) => {
    const profile = _.find(this.state.profiles, (profile) => profile.ProfileID === profileId)
    this.setState({
      selectedProfileId: profileId,
      selectedProfile: profile,
      fallbackLogo: profile.ProfileImage || '',
    })
  }

  getSelectProfile = () => {
    const stateProfile = this.state.selectedProfile
    const profile = _.isEmpty(stateProfile) ? this._getEditGorgiasProfile() : stateProfile
    return ({
      label: profile.ProfileFullname, value: profile.ProfileID,
    })
  }

  submitBrandAdminForm = (formData) => {
    const selectedProfile = this.state.selectedProfile
    formData.gorgiasId = selectedProfile.ProfileID
    formData.gorgiasName = selectedProfile.ProfileFullname
    formData.country = selectedProfile.Country
    formData.currencyCode = selectedProfile.CurrencyCode
    formData.email = selectedProfile.ProfileEmail
    formData.gorgiasLogo = selectedProfile.ProfileImage
    this.props.submitBrandAdminForm(formData)
  }

  _getEditGorgiasProfile = () => {
    const profile = this.state.profile
    if (_.isEmpty(profile)) {
      return {}
    }

    return {
      ProfileFullname: profile.gorgiasName,
      ProfileID: profile.gorgiasId
    }
  }

  render() {
    return (
      <div>
        <BrandAdminEditFormComponent
          profile={this.state.profile}
          authData={this.state.authData}
          submitBrandAdminForm={this.submitBrandAdminForm}
          getProfiles={this.props.getProfiles}
          selectedProfileId={this.state.selectedProfileId}
          getSelectProfile={this.getSelectProfile}
          onSelectProfile={this.onSelectProfile}
          selectedProfile={this.selectedProfile}
          deleteProfile={this.props.deleteProfile}
          isEditMode={this.state.isEditMode}
          fallbackLogo={this.state.fallbackLogo}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    profile: state.user.profile,
    authData: state.authentication.authData,
    profiles: state.integration.profiles,
    isFetching: state.integration.isFetching,
  })
}

const mapDispatchToProps = (dispatch, props) => ({
  getUser: () => {
    const userId = props.match.params.userId
    if (userId) {
      dispatch(getUserRequest(userId))
    }
  },
  getProfiles: (input, callback) => {
    if (input.length < 3) {
      return
    }

    dispatch(getIntegrationProfilesRequest(input, callback))
  },
  submitBrandAdminForm: (formData) => {
    const userId = props.match.params.userId
    if (userId) {
      dispatch(updateUserRequest(formData, userId, props.history))
    } else {
      formData.isGorgiasApproved = true
      dispatch(createUserRequest(formData, props.history))
    }
  },
  deleteProfile: () => {
    dispatch(swal({
      title: 'Delete Brand',
      text: 'Confirm delete this Brand? Deleted Brand are not reversable',
      showCancelButton: true,
      onConfirm: () => dispatch(deleteUserRequest(props.match.params.userId, props.history)),
    }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BrandAdminEditContainer)
