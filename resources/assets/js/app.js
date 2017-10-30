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
        delete this.errors[field]
    }

    any () {
        // if this.errors is not empty there are errors
        return Object.keys(this.errors).length > 0
    }
}

class Form {
    constructor (data) {
        this.data = data

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    reset () {}
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
            axios
                .post('/projects', this.$data)
                // .then(response => alert('Success'))
                .then(this.onSuccess)
                // .catch(error => (this.errors = error.response.data))
                .catch(error =>
                    this.form.errors.record(error.response.data.errors)
                )
            // .catch(error => {
            //     console.log(error.response.data.errors)
            // })
        },
        onSuccess (response) {
            alert(response.data.message)

            this.name = ''
            this.description = ''
        }
    }
})
