import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarComponent extends Component {

  render() {
    const { triggerSidebarCollapse } = this.props
    return (
      <header className="header">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              <div className="navbar-header">
                <Link to="/dashboard" className="navbar-brand">
                  <div className="brand-text brand-big"><span>BrandSo</span></div>
                  <div className="brand-text brand-small"><strong>BD</strong></div>
                </Link>
                <a id="toggle-btn" href="#" className="menu-btn active" onClick={() => triggerSidebarCollapse()}><span></span><span></span><span></span></a>
              </div>
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <li className="nav-item dropdown">
                  <a id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link">
                    <i className="fa fa-envelope-o"></i>
                    <span className="badge badge-info">10</span>
                  </a>
                  <ul aria-labelledby="notifications" className="dropdown-menu">
                    <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
                      <div className="msg-profile"><img src="" alt="..." className="img-fluid rounded-circle" /></div>
                      <div className="msg-body">
                        <h3 className="h5">Jason Doe</h3><span>Sent You Message</span>
                      </div></a></li>
                    <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
                      <div className="msg-profile"> <img src="" alt="..." className="img-fluid rounded-circle" /></div>
                      <div className="msg-body">
                        <h3 className="h5">Frank Williams</h3><span>Sent You Message</span>
                      </div></a></li>
                    <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
                      <div className="msg-profile"> <img src="" alt="..." className="img-fluid rounded-circle" /></div>
                      <div className="msg-body">
                        <h3 className="h5">Ashley Wood</h3><span>Sent You Message</span>
                      </div></a></li>
                    <li><a rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong>Read all messages</strong></a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link logout" onClick={() => this.props.signout()}>Logout<i className="fa fa-sign-out"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavbarComponent
