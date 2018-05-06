import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/NavbarComponent.css'

const NavbarComponent = (props) => (
  <nav className={`navbar navbar-light static-top ${styles.nav}`}>
    <div className="container">
      <Link className="navbar-brand" to="/"></Link>
      <div>
        <select>
          {
            props.languages.map((val, key) => {
              return props.browserLanguageCode === val ?
                <option key={key} value={val} selected="selected">{val}</option>
                :
                <option key={key} value={val} >{val}</option>
            })
          }
        </select>
      </div>
      <div className="pull-right d-none">
        <ul>
          <li><Link to="/" className={styles.navLink}>Home</Link></li>
          <li><Link to="/" className={styles.navLink}>Sign in</Link></li>
          <li><Link to="/" className={styles.navLink}>My Account</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default NavbarComponent
