import React from 'react'

const CheckboxComponent = ({ input, label, disabled, type, meta: { touched, error, warning }, className, containerClassName, placeholder, description }) => {
  const validateClassName = touched && ((error && 'has-error') || (warning && 'has-warning') || 'has-success')
  const inputClassName = className ? `${className}-input` : ''
  return (
    <div className={`form-group ${containerClassName || ''}`}>
      <label className={`${className} custom-checkbox`}>
        <input
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={type !== 'file' ? `form-control ${inputClassName} ${validateClassName}` : `form-control-file ${inputClassName} ${validateClassName}`}
          {...input}
        />
        <span className={`${className}-indicator`}></span>
        <span className={`${className}-description`}> {label}</span>
        {description && <small>{description}</small>}
        {touched && ((error && <span className={`${validateClassName}-message`}>{error}</span>) || (warning && <span className={`${validateClassName}-message`}>{warning}</span>))}
      </label>
    </div>
  )
}

export { CheckboxComponent }
