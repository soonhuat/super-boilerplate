import React from 'react'
import Dropzone from 'react-dropzone'
import _ from 'lodash'

const FileDropZone = field => {
  const files = field.input.value

  return (
    <div className={`form-group ${field.containerClassName || ''}`}>
      <label>{field.label}</label>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
        // className={_.isEmpty(files) ? 'dropzone' : 'dropzone-preview'}
        className="dropzone mb-0"
      >
        {
          _.isEmpty(files) ?
            <div className="d-flex h-100"><p className="align-self-center">Try dropping some files here, or click to select files to upload.</p></div>
            :
            <div>
              {
                files.map((file, key) => {
                  return (
                    <div key={key} className="d-flex h-100" style={{ marginLeft: 10, marginTop: 8 }} ><p>{key + 1}. {file.name}</p></div>
                  )
                })
              }
            </div>
        }

      </Dropzone>
      {field.description && <small>{field.description}</small>}
      {field.meta.touched &&
        field.meta.error &&
        <span className={'error'}>{field.meta.error}</span>}
    </div>
  )
}

export { FileDropZone }
