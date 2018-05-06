import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
// require('react-datepicker/dist/react-datepicker.css')

const DatePickerComponent = ({ input, label, placeholder, inline, required, meta: { touched, error, warning }, containerClassName, description }) => {
  const validateClassName = touched && ((error && 'has-error') || (warning && 'has-warning') || 'has-success')
  if (input.value) {
    input.value = moment(input.value).format('YYYY-MM-DD')
  }
  return (
    <div className={`form-group ${containerClassName || ''}`}>
      <label className="align-top" htmlFor={input.name}>{label} </label>
      <div className="col-12">
        <DatePicker
          className="form-control"
          {...input}
          placeholder={placeholder}
          dateFormat="YYYY-MM-DD"
          selected={input.value ? moment(input.value, 'YYYY-MM-DD') : null}
          onChange={(date) => {
            input.onChange(moment(date).format('YYYY-MM-DD'))
          }}
          inline={inline}
          required={required}
        />
        {description && <small>{description}</small>}
        {touched && ((error && <span className={`${validateClassName}-message`}>{error}</span>) || (warning && <span className={`${validateClassName}-message`}>{warning}</span>))}
      </div>
    </div>
  )
}

export { DatePickerComponent }
