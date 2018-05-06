import React from 'react'
import _ from 'lodash'

const InputComponent = ({ input, label, disabled, type, meta: { touched, error, warning, asyncValidating }, className, containerClassName, placeholder, description }) => {
  const validateClassName = touched && ((error && 'has-error') || (warning && 'has-warning') || 'has-success')
  if (_.isObject(input.value)) {
    input.value = ''
  }
  return (
    <div className={`form-group ${containerClassName || ''}`}>
      {label && <label htmlFor={input.name}>{label}</label>}
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={type !== 'file' ? `form-control ${className || ''} ${validateClassName}` : `form-control-file ${className || ''} ${validateClassName}`}
        {...input}
      />
      {description && <small>{description}</small>}
      {touched && ((error && <span className={`${validateClassName}-message`}>{error}</span>) || (warning && <span className={`${validateClassName}-message`}>{warning}</span>))}
    </div>
  )
}

export { InputComponent }
