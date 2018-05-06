import React from 'react'

const Button = (props) => {
  const { loading = false, type, text, htmlType, onClick, className } = props
  return (
    <button className={`btn btn-${type} ${className}`} disabled={loading} type={htmlType} onClick={onClick}>
      {
        loading ?
          <i className="fa fa-spinner" />
        :
          text
      }
    </button>
  )
}

export default Button
