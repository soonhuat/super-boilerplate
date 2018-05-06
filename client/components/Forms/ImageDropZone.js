
import React from 'react'
import Dropzone from 'react-dropzone'
import Img from 'react-image'
import _ from 'lodash'
import { gorgiasApi } from '../../config/general'

const ImageDropZone = field => {
  const files = field.input.value
  const fallbackFiles = field.fallbackValue
  const hasUploadImage = !_.isEmpty(files)
  const hasFallbackFiles = !_.isEmpty(fallbackFiles)
  const hasNoImage = !hasUploadImage && !hasFallbackFiles
  let placeholderImage = []
  if (hasUploadImage) {
    if (typeof files[0] === 'object') {
      placeholderImage = files
    } else {
      if (_.isObject(files)) {
        placeholderImage.push({ urlPreview: files.filename })
      } else {
        placeholderImage.push({ urlPreview: files })
      }
    }
    // console.log(files)
    // if (_.isArray(files[0])) {
    //   placeholderImage = files
    // } else {
    //   if (_.isArray(files) === true) {
    //     files.map((file) => {
    //       return placeholderImage.push({ preview: file.filename })
    //     })
    //   } else {
    //     placeholderImage.push({ preview: files.filename })
    //   }
    // }
  } else if (hasFallbackFiles) {
    placeholderImage.push(fallbackFiles)
  }

  return (
    <div className={`form-group ${field.containerClassName || ''}`}>
      <label>{field.label}</label>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
        multiple={field.multiple || false}
        accept='image/jpeg, image/png'
        className={hasNoImage ? 'dropzone' : 'dropzone-preview'}
      >
        {
          hasNoImage ?
            <div className="d-flex h-100"><p className="align-self-center">Try dropping some files here, or click to select files to upload.</p></div>
          :
            <div>
              {
                _.isObject(placeholderImage) ?
                  placeholderImage.map((image) => {
                    console.log(image)
                    if (image && !image.urlPreview && !image.preview) {
                      return (
                        <img key={image.preview} src={image} alt={image} className="preview" />
                      )
                    } else if (image.urlPreview) {
                      return (
                        <Img key={image.urlPreview} src={[`${gorgiasApi.brandso}${image.urlPreview}`, `${gorgiasApi.fallback}${image.urlPreview}`]} alt={image.urlPreview} className={'preview'} />
                      )
                    } else if (image.preview) {
                      return (
                        <img key={image.preview} src={image.preview} alt={image.preview} className="preview" />
                      )
                    }
                  })
                :
                  <img src={placeholderImage} alt={placeholderImage} className={'preview'} />
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

export { ImageDropZone }
