export const required = value => (value ? undefined : 'This field is required')

export const requiredImage = value => (value ? undefined : 'You need to upload an image')

export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined

export const tooOld = value => value && value > 65 ? 'You might be too old for this' : undefined

export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined

export const phoneNumber = value => value && /^(\+?6?01)[0|1|2|3|4|6|7|8|9]\-*[0-9]{7,8}$/.test(value) ? 'Invalid phone number' : undefined