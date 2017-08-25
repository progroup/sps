<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

  <!-- Scripts -->
  <script>
    window.App = {!! json_encode([
      'csrfToken' => csrf_token(),
      'user' => Auth::user(),
      'signedIn' => Auth::check()
    ])!!};
  </script>
  <style>
    .ais-highlight em {
      background-color: #ff9;
      font-style: normal;
    }
  </style>
</head>

<body>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2">
          </div>
          <div class="column">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
  <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
