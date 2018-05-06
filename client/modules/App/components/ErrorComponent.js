import React from 'react'
import styles from './styles/ErrorComponent.css'
import { Link } from 'react-router-dom'

export default () => (
  <div className="container d-flex flex-column">
    <hr style={{ width: '100%' }} />
    <h1 className={styles.errorCode}>Error 404</h1>
    <p className={styles.errorSentence}>Page not found</p>
    <hr style={{ width: '100%' }} />
    <p className={styles.errorSentence}>We are sorry but the page you are looking for does not exists.</p>
    <p className={styles.errorSentence}>You could return to homepage <Link to="/dashboard">here</Link>.</p>
  </div>
)
