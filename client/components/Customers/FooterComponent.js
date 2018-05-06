import React from 'react'
import styles from './styles/FooterComponent.css'

const FooterComponent = () => (
  <footer className={`footer ${styles.footer} animation`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h3>Get Social</h3>
          <a href="#"><i className={`fa fa-facebook ${styles.socialButton} social-button`} /></a>
          <a href="#"><i className={`fa fa-linkedin ${styles.socialButton} social-button`} /></a>
          <a href="#"><i className={`fa fa-google-plus ${styles.socialButton} social-button`} /></a>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterComponent
