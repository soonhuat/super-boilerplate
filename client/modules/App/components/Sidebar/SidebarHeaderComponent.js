import React from 'react'

const SidebarHeaderComponent = (props) => (
  <div className="sidebar-header d-flex align-items-center">
    <div className="avatar"><img src="../../../../../static/demo.png" alt="..." className="img-fluid rounded-circle" /></div>
    <div className="title">
      <h1 className="h4">BrandSo Admin</h1>
      <p>{props.profile.roleName || ''}</p>
    </div>
  </div>
)

export default SidebarHeaderComponent
