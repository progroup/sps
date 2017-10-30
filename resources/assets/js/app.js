import Vue from 'vue'
import Buefy from 'buefy'
import axios from 'axios'

Vue.use(Buefy)
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

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor (data) {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    /**
     * Fetch all relevant data for the form.
     */
    data () {
        // this clones the data
        let data = Object.assign({}, this) // {name, description, originalData, errors }

        delete data.originalData
        delete data.errors

        return data
    }

    /**
     * Reset the form fields.
     */
    reset () {
        for (let field in this.originalData) {
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
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this))
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
     * @param {object} error
     */
    onFail (error) {
        this.errors.record(error.response.data.errors)
    }
}

const app = new Vue({
    el: '#app',
    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },
    methods: {
        onSubmit () {
            this.form.submit('post', '/projects')
        }
    }
})
