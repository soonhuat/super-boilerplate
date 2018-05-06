import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'

import { getBrowserIsoLanguageCode } from './util/languageHelper'
import App from './modules/App/App'
import { setBrowserLanguageCode } from './modules/WorldActions'
import LoginContainer from './modules/Dashboard/Authentication/containers/LoginContainer'
import Navbar from './modules/App/components/Navbar/NavbarComponent'
import Sidebar from './modules/App/components/Sidebar/SidebarComponent'
import ErrorComponent from './modules/App/components/ErrorComponent'
import CategoryListContainer from './modules/Dashboard/Category/containers/CategoryListContainer'
import CategoryEditContainer from './modules/Dashboard/Category/containers/CategoryEditContainer'
import ProductListContainer from './modules/Dashboard/Products/containers/ProductListContainer'
import ProductEditContainer from './modules/Dashboard/Products/containers/ProductEditContainer'
import ProductViewContainer from './modules/Dashboard/Products/containers/ProductViewContainer'
import BrandAdminListContainer from './modules/Dashboard/Brand/containers/BrandAdminListContainer'
import BrandAdminEditContainer from './modules/Dashboard/Brand/containers/BrandAdminEditContainer'
import CampaignListContainer from './modules/Dashboard/Campaign/containers/CampaignListContainer'
import CampaignEditContainer from './modules/Dashboard/Campaign/containers/CampaignEditContainer'
import { isTokenValid, logoutUser } from './modules/Dashboard/Authentication/AuthenticationActions'
import LabelListContainer from './modules/Dashboard/Configuration/containers/LabelListContainer'
import LabelEditContainer from './modules/Dashboard/Configuration/containers/LabelEditContainer'
import StepEditContainer from './modules/Dashboard/Step/containers/StepEditContainer'
import MessageListContainer from './modules/Dashboard/Message/container/MessageListContainer'
import CreateMessageContainer from './modules/Dashboard/Message/container/CreateMessageContainer'
import FormListContainer from './modules/Dashboard/Form/containers/FormListContainer'
import FormEditContainer from './modules/Dashboard/Form/containers/FormEditContainer'

class BrandsApp extends Component {
  state = {
    isAuthenticated: false,
    isFetching: true,
    isShrinked: false,
  }

  componentWillMount() {
    const { cookies } = this.props
    const token = cookies.get('token')
    if (!token || token === '') {
      this.setState({
        isFetching: false,
      })
    }
    this.props.revokeAuthentication()
    const isoLanguageCode = getBrowserIsoLanguageCode()
    this.props.setBrowserLanguageCode(isoLanguageCode)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isAuthenticated: nextProps.isAuthenticated,
      isFetching: nextProps.isFetching,
      authData: nextProps.authData,
    })
  }

  triggerSidebarCollapse = () => {
    this.setState({
      isShrinked: !this.state.isShrinked,
    })
  }

  render() {
    const { match } = this.props
    const { isShrinked } = this.state
    return (
      <div className="brand">
        {
          this.state.isAuthenticated ?
            <div>
              <Navbar signout={this.props.signout} triggerSidebarCollapse={this.triggerSidebarCollapse} />
              <Sidebar isShrinked={isShrinked} authData={this.state.authData} />
              <div className={`main${isShrinked ? '' : ' shrinked'}`}>
                <container>
                  <Switch>
                    <Route exact path={`${match.url}/brands/:slug`} component={App} />
                    <Route exact path={`${match.url}/category`} component={CategoryListContainer} />
                    <Route exact path={`${match.url}/category/edit`} component={CategoryEditContainer} />
                    <Route exact path={`${match.url}/category/edit/:categoryId`} component={CategoryEditContainer} />
                    <Route exact path={`${match.url}/product`} component={ProductListContainer} />
                    <Route exact path={`${match.url}/product/view/:productId`} component={ProductViewContainer} />
                    <Route exact path={`${match.url}/product/edit`} component={ProductEditContainer} />
                    <Route exact path={`${match.url}/product/edit/:productId`} component={ProductEditContainer} />
                    <Route exact path={`${match.url}/brand/admin`} component={BrandAdminListContainer} />
                    <Route exact path={`${match.url}/brand/admin/edit`} component={BrandAdminEditContainer} />
                    <Route exact path={`${match.url}/brand/admin/edit/:userId`} component={BrandAdminEditContainer} />
                    <Route exact path={`${match.url}/campaign`} component={CampaignListContainer} />
                    <Route exact path={`${match.url}/campaign/edit`} component={CampaignEditContainer} />
                    <Route exact path={`${match.url}/campaign/edit/:campaignId`} component={CampaignEditContainer} />
                    <Route exact path={`${match.url}/campaign/:campaignId/product`} component={ProductListContainer} />
                    <Route exact path={`${match.url}/label`} component={LabelListContainer} />
                    <Route exact path={`${match.url}/label/edit`} component={LabelEditContainer} />
                    <Route exact path={`${match.url}/label/edit/:labelId`} component={LabelEditContainer} />
                    <Route exact path={`${match.url}/step/edit/:stepId`} component={StepEditContainer} />
                    <Route exact path={`${match.url}/message`} component={MessageListContainer} />
                    <Route exact path={`${match.url}/message/create`} component={CreateMessageContainer} />
                    <Route exact path={`${match.url}/form`} component={FormListContainer} />
                    <Route exact path={`${match.url}/form/edit/:owner`} component={FormEditContainer} />
                    <Route exact path={`${match.url}/form/edit`} component={FormEditContainer} />
                    <Route component={ErrorComponent} />
                  </Switch>
                </container>
              </div>
            </div>
          :
            <Switch>
              <Route component={LoginContainer} />
            </Switch>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  authData: state.authentication.authData,
  isFetching: state.authentication.signin.isFetching,
  profile: state.profile,
})

const mapDispatchToProps = (dispatch, props) => ({
  revokeAuthentication: () => {
    const { cookies } = props
    const token = cookies.get('token')
    if (token && token !== '') {
      return dispatch(isTokenValid())
    }
  },
  signout: () => {
    return dispatch(logoutUser())
  },
  setBrowserLanguageCode: (languageCode) => {
    return dispatch(setBrowserLanguageCode(languageCode))
  },
})
export default withCookies(withRouter(connect(mapStateToProps, mapDispatchToProps)(BrandsApp)))
