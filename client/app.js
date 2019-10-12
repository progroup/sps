import Vue from 'vue'
import router from "./router"

const app = new Vue({
    el: '#app',
    router,
    data: () => ({
        aboutMenuOpen: false,
        eccoMenuOpen: false,
        form: new Form({
            name: '',
            description: ''
        })
    }),
    methods: {
        onSubmit () {
            this.form
                .submit('post', '/projects')
                .then(data => console.log(data))
                .catch(errors => console.log(errors))
        }
    }
})



const app = new Vue({
    el: "#app",
    router,
    data: {
        aboutMenuOpen: false,
        eccoMenuOpen: false
    }
})