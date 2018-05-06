import React from 'react'
import { Field } from 'redux-form'
import { ImageDropZone } from '../../../../components/Forms'
import { required } from '../../../../util/formValidation'

const BrandPhotosComponent = ({ fields }) => {
  return (
    <div>
      <button className="btn btn-primary mb-1 mt-3" type="button" onClick={() => fields.push({})}>
        <i className="fa fa-plus" /> Add Photo
      </button>
      <div className="row">
      {
        fields.map((detail, index) =>
          <div key={index} className="col-6">
            <div className="card mb-3">
              <div className="card-body">
                <span className="pull-right bg-danger text-white fa-icon">
                  <i className="fa fa-trash-o" onClick={() => fields.remove(index)}></i>
                </span>
                <Field name={`${detail}`} label="Photo" component={ImageDropZone} validate={[required]} />
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default BrandPhotosComponent;
