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
        let data = {}

        for (let property in this.originalData) {
            data[property] = this[property]
        }

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
            this.form
                .submit('post', '/projects')
                .then(data => console.log(data))
                .catch(errors => console.log(errors))
        }
    }
})
