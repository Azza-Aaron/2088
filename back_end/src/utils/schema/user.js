const yup = require ('yup')
require('yup-password')(yup)
const moment = require('moment')

let userSchema = yup.object().shape({
  firstName: yup.string().min(2).max(50, 'Max 50 characters').required(),
  lastName: yup.string().min(2).max(50, 'Max 50 characters').required(),
  dob: yup.string()
    .test("dob", "Users must be 18",
      (value) => moment().diff(moment(value, 'dd/mm/yyyy'),'years') >= 18)
    .required(),
  email: yup.string()
    .min(11)
    .max(100)
    .email()
    .required(),
  password: yup.string()
    .max(50, 'max password length is 50 characters.')
    .min(
      8,
      'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number'
    )
    .minLowercase(1, 'password must contain at least 1 lower case letter')
    .minUppercase(1, 'password must contain at least 1 upper case letter')
    .minNumbers(1, 'password must contain at least 1 number')
    .required()
});

module.exports = {
  userSchema
}