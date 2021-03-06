const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    // Check email field validation
    data.email = !isEmpty(data.email) ? data.email : '';
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required.';
    } else if(!Validator.isEmail(data.email)) {
        errors.email = 'Email field is Invalid.';
    }

    // Check password field validation
    data.password = !isEmpty(data.password) ? data.password : '';
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}