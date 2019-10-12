<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Projects</title>
     <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <script>
        window.App = {!! json_encode([
            'csrfToken' => csrf_token(),
            'user' => Auth::user(),
            'signedIn' => Auth::check()
        ])!!};
    </script>
    <style>
        [v-cloak] { display: none; }
    </style>
</head>
<body>
<div id="app">
<section class="section">
    <div class="container">
        <form action="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="field">
                <label for="name" class="label">Project Name</label>
                <div class="control">
                    <input id="name" type="text" class="input" name="name" v-model="form.name">
                    {{--  span.help:empty {display: none }  --}}
                </div>
                <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
            </div>
            <div class="field">
                <label for="description" class="label">Description</label>
                <div class="control">
                    <textarea id="description" class="textarea" name="description" v-model="form.description"></textarea>
                </div>
                <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"> </span>
            </div>

            <div class="field">
                <button class="button is-primary" :disabled="form.errors.any()">Create</button>
            </div>
        </form>
    </div>
</section>

</div>

<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
