import Vue from 'vue'
import Buefy from 'buefy'
import axios from 'axios'

Vue.use(Buefy)
class Errors {
    constructor () {
        this.errors = {}
    }

    has (field) {
        // if this.errors contains a 'field' property.
        return this.errors.hasOwnProperty(field)
    }
    get (field) {
        if (this.errors[field]) {
            return this.errors[field][0]
        }
    }

    record (errors) {
        this.errors = errors
    }

    clear (field) {
        if (field) {
            delete this.errors[field]
            return
        }

        this.errors = {}
    }

    any () {
        // if this.errors is not empty there are errors
        return Object.keys(this.errors).length > 0
    }
}

class Form {
    constructor (data) {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    data () {
        // this clones the data
        let data = Object.assign({}, this) // {name, description, originalData, errors }

        delete data.originalData
        delete data.errors

        return data
    }

    reset () {
        for (let field in this.originalData) {
            this[field] = ''
        }
    }

    submit (requestType, url) {
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this))
    }

    onSuccess (response) {
        alert(response.data.message)

        this.errors.clear()
        this.reset()
    }

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
