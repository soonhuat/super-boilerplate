import React from 'react'
import moment from 'moment'
import styles from './styles/CopyrightFooterComponent.css'

const CopyrightFooterComponent = () => (
  <div className={`${styles.copyrightFooter} fixed-bottom copyright-footer`}>
    <div className="container">
      Copyright &copy;{moment().format('YYYY')} - Brandso. All rights reserved.
      </div>
  </div>
)

export default CopyrightFooterComponent
