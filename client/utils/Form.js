import axios from 'axios'
import Errors from './Errors'

class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor (data) {
    this.originalData = data

    for (const field in data) {
      this[field] = data[field]
    }

    this.errors = new Errors()
  }

  /**
   * Fetch all relevant data for the form.
   */
  data () {
    const data = {}

    for (const property in this.originalData) {
      data[property] = this[property]
    }

    return data
  }

  /**
   * Reset the form fields.
   */
  reset () {
    for (const field in this.originalData) {
      this[field] = ''
    }
    this.errors.clear()
  }

  /**
   * Submit the form.
   *
   * @param  {string} requestType
   * @param  {string} url
   */
  submit (requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
      // .then(this.onSuccess.bind(this))
        .then(response => {
          this.onSuccess(response.data)

          resolve(response.data)
        })
      // .catch(this.onFail.bind(this))
        .catch(error => {
          this.onFail(error.response.data.errors)

          reject(error.response.data.errors)
        })
    })
  }

  /**
   * Handle a successful form submission.
   *
   * @param {object} response
   */
  onSuccess (response) {
    alert(response.data.message)

    this.reset()
  }

  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail (errors) {
    this.errors.record(errors)
  }
}

export default Form
