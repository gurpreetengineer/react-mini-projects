const joi = require('joi');

const validateSchema = async (inputs, schema) => {
  try {
    // joi.validate is no longer supported in version 16.
    /**
     * Refer to https://stackoverflow.com/questions/57956609/joi-1-default-validate-is-not-a-function
     */
    const { error, value } = schema.validate(inputs);
    if (error) throw error.details ? error.details[0].message : '';
    else return false;
  } catch (error) {
    throw error
  }
}

module.exports = {
  validateSchema: validateSchema,
}