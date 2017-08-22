<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">

  <!-- Scripts -->
  <script>
    window.App = {!! json_encode([
      'csrfToken' => csrf_token(),
      'user' => Auth::user(),
      'signedIn' => Auth::check()
    ])!!};
  </script>
</head>

<body>
  <div id="app">
    <main class="main">
      @include ('layouts.nav')
      @include ('layouts.hero')
      @yield('content')
    </main>
    @include ('layouts.footer')
  </div>

  <flash message="{{ session('flash') }}"></flash>
  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}"></script>
  <script src="//s3.amazonaws.com/scripts.hellobar.com/db5100bd0d00d770fd80b188dbabf1529f1e4ff7.js"></script>
</body>

</html>
