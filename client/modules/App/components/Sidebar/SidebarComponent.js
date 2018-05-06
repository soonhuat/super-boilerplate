import React from 'react'
import Img from 'react-image'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'
import { gorgiasApi } from '../../../../config/general'

const SidebarComponent = ({ authData, isShrinked }) => {
  return (
    <nav className={`side-navbar${isShrinked ? ' shrinked' : ''}`}>
      <SidebarHeader authData={authData || {}} />
      <span className="heading">Main</span>
      <ul className="list-unstyled">
        <li>
          <NavLink to="/dashboard/campaign" activeClassName="active"><i className="fa fa-picture-o"></i>Campaign </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/category" activeClassName="active"><i className="fa fa-sitemap"></i>Category </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/product" activeClassName="active"><i className="fa fa-pencil-square-o"></i>Product </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reporting" activeClassName="active"><i className="fa fa-bar-chart"></i>Reporting </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/form" activeClassName="active"><i className="fa fa-file-text"></i>Forms </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reponse" activeClassName="active"><i className="fa fa-list-alt"></i>Response </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/message" activeClassName="active"><i className="fa fa-envelope"></i>Inbox </NavLink>
        </li>
      </ul>
      {
        authData.role === 'admin' &&
          <div>
            <span className="heading">Admin</span>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/dashboard/brand/admin" activeClassName="active"><i className="fa fa-address-card-o"></i>Manage Brands </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/label" activeClassName="active"><i className="fa fa-address-card-o"></i>Manage Label </NavLink>
              </li>
            </ul>
          </div>
      }
    </nav>
  )
}

export const SidebarHeader = (props) => {
  let currentLanguageDetail = _.find(props.authData.details, (detail) => detail.isDefault)
  if (_.isEmpty(currentLanguageDetail)) {
    currentLanguageDetail = props.authData.details.length === 0 ? {} : props.authData.details[0]
  }
  return (
    <div className="sidebar-header d-flex align-items-center">
      <div className="avatar">
        {
          props.authData.logo ?
            <Img
              src={[`${gorgiasApi.brandso}${props.authData.logo}`, `${gorgiasApi.fallback}${props.authData.logo}`]}
              alt="..."
              className="img-fluid rounded-circle"
            />
          :
            <i className="fa fa-user-circle fa-3x" />
        }
      </div>
      <div className="title">
        <h1 className="h4">{currentLanguageDetail.name}</h1>
        <p style={{ fontWeight: 'normal' }}>{_.capitalize(props.authData.role) || ''}</p>
      </div>
    </div>
  )
}

export default SidebarComponent
