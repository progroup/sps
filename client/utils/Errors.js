class Errors {
  constructor () {
    this.errors = {}
  }

  /**
   * Determine if an errors exists for the given field.
   */
  has (field) {
    // if this.errors contains a 'field' property.
    return this.errors.hasOwnProperty(field)
  }

  /**
   * Determine if we have any errors.
   */
  any () {
    // if this.errors is not empty there are errors
    return Object.keys(this.errors).length > 0
  }

  /**
   * Retrieve the error message for a field.
   */
  get (field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record (errors) {
    this.errors = errors
  }

  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear (field) {
    if (field) {
      delete this.errors[field]
      return
    }

    this.errors = {}
  }
}

export default Errors
