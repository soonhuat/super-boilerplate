import React from 'react'
import _ from 'lodash'

const SelectComponent = ({ input, label, type, disabled, onChange, meta: { touched, error, warning }, className, containerClassName, placeholder, showSearch, onSearch, filterOption, children, description }) => {
  const validateClassName = touched && ((error && 'has-error') || (warning && 'has-warning') || 'has-success')
  return (
    <div className={`form-group ${containerClassName || ''}`}>
      <label htmlFor={input.name}>{label}</label>
      {
        _.isUndefined(onChange) ?
          <select
            disabled={disabled}
            className={`form-control ${className || ''} ${validateClassName}`}
            {...input}
          >
            {children}
          </select>
          :
          <select
            disabled={disabled}
            className={`form-control ${className || ''} ${validateClassName}`}
            {...input}
            onChange={(event) => onChange(event)}
          >
            {children}
          </select>
      }
      {description && <small>{description}</small>}
      {touched && ((error && <span className={`${validateClassName}-message`}>{error}</span>) || (warning && <span className={`${validateClassName}-message`}>{warning}</span>))}
    </div>
  )
}

export { SelectComponent }
