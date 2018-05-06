import React from 'react'
import styles from './styles/MiniNavbarComponent.css'

const MiniNavbarComponent = () => (
  <div className={`d-none d-md-block ${styles.container}`}>
    <div className="container">
      <div className={styles.contactMethod}>
        <i className="fa fa-phone" />&nbsp;&nbsp;&nbsp;
        <a href="tel://1300-00-4343">1300-00-4343</a>
      </div>
      <div className={styles.contactMethod} style={{ borderRight: '1px solid #e9e9e9' }}>
        <i className="fa fa-envelope" />&nbsp;&nbsp;&nbsp;
        <a href="email://hello@brandso.com">hello@brandso.com</a>
      </div>
      <div style={{ float: 'right', display: 'inline' }}>
        <div className={styles.socialIcon}>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
        </div>
        <div className={styles.socialIcon}>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
        </div>
        <div className={styles.socialIcon} style={{ borderRight: '1px solid #e9e9e9' }}>
          <a href="#">
            <i className="fa fa-google-plus" />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default MiniNavbarComponent
