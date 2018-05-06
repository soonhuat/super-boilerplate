/* eslint-disable global-require */
import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Cookies, withCookies } from 'react-cookie'
import ReduxSweetAlert from 'react-redux-sweetalert'
import { instanceOf } from 'prop-types'
import App from './modules/App/App'
import CustomerApp from './CustomerApp'
import BrandsApp from './BrandsApp'
import _ from 'lodash'

class Routes extends React.Component {
  state = {
    isMounted: null,
  }
  componentWillMount() {
    this.setState({
      isMounted: true,
    });
  }
  render() {
    return (
      <div>
        <Switch>
          {
            _.split(this.props.location.pathname, '/')[1] === 'dashboard' ?
              <Route path="/dashboard" component={BrandsApp} />
            :
              <Route path="/" component={CustomerApp} />
          }
        </Switch>
        <ReduxSweetAlert />
      </div>
    );
  }
}

const AppRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} />
    )}
  />
)

// const BrandsRoutes = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => (
//       <Component {...props} />
//     )}
//   />
// )

export default withCookies(withRouter(connect()(Routes)));
