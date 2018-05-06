import React from 'react'
// import ReactQuill from 'react-quill';
// let ReactQuill = require('react-quill');
let ReactQuill = null
if (typeof window !== 'undefined') {
  ReactQuill = require('react-quill')
}

const TextAreaComponent = ({ input, label, rows, disabled, meta: { touched, error, warning }, className, placeholder, textEditor, description }) => {
  const validateClassName = touched && ((error && 'has-error') || (warning && 'has-warning') || 'has-success')
  return (
    <div className="form-group col-12 d-inline-block">
      <label htmlFor={input.name}>{label}</label>
      {
        textEditor && typeof window !== 'undefined' && ReactQuill ?
          <div className="pb-5">
            <ReactQuill
              rows={rows}
              {...input}
              className={`form-control ${className || ''} ${validateClassName}`}
              onChange={(newValue, delta, source) => {
                if (source === 'user') {
                  input.onChange(newValue);
                }
              }}
              onBlur={(range, source, quill) => {
                input.onBlur(quill.getHTML());
              }}
              className="textarea-quill"
            />
          </div>
        :
          <textarea
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
            className={`form-control ${className || ''} ${validateClassName}`}
            {...input}
          />
      }
      {description && <small>{description}</small>}
      {touched && ((error && <span className={`${validateClassName}-message`}>{error}</span>) || (warning && <span className={`${validateClassName}-message`}>{warning}</span>))}
    </div>
  )
}

export { TextAreaComponent }
