import React from 'react'
import { Field } from 'redux-form'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { InputComponent, SelectComponent, CheckboxComponent, TextAreaComponent } from '../../../../components/Forms'
import language from '../../../../config/language'
import { required } from '../../../../util/formValidation'

const BrandDetailComponent = ({ fields }) => {
  return (
    <div>
      <button className="btn btn-primary mb-1" type="button" onClick={() => fields.push({})}>
        <i className="fa fa-plus" /> Add Language
      </button>
      <div className="row">
        <Tabs className="col-12">
          <TabList>
          {
          fields.map((detail, index) => {
            const thisDetail = fields.get(index)
            return (
              <Tab key={index} tabIndex={`'${index}'`}>
                <span className="tab-title">{language[thisDetail.language] || 'New'}</span>
                {
                  !thisDetail.isDefault && <span className="pull-right text-danger text-right fa-icon">
                    <i className="fa fa-times-circle-o" onClick={() => fields.remove(index)}></i>
                  </span>
                }
              </Tab>
            )
          })
          }
          </TabList>
          {
          fields.map((detail, index) =>
            <TabPanel key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <Field
                    name={`${detail}.name`}
                    type="text"
                    component={InputComponent}
                    label="Full Name"
                    validate={[required]}
                  />
                  <Field
                    name={`${detail}.description`}
                    type="text"
                    component={TextAreaComponent}
                    label="Description"
                    textEditor
                  />
                  <div className="form-group">
                    <label htmlFor={`${detail}.isDefault`}></label>
                    <div className="custom-control">
                      <label className="custom-control custom-checkbox">
                        <Field name={`${detail}.isDefault`} className="form-check-input" type="checkbox" component="input" />
                        <span className="custom-control-description"> Default Language</span>
                      </label>
                    </div>
                  </div>
                  <Field
                    name={`${detail}.language`}
                    label="Language Code"
                    component={SelectComponent}
                    validate={[required]}
                  >
                    <option value="" defaultValue disabled>Choose one...</option>
                    {
                      Object.keys(language).map((key) => {
                        return <option value={key} key={`language_${key}`}>{language[key]}</option>
                      })
                    }
                  </Field>
                </div>
              </div>
            </TabPanel>
          )
          }
        </Tabs>
      </div>
    </div>
  )
}

export default BrandDetailComponent;
