<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="google" value="notranslate">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

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
      @include('layouts.nav')
      @include('layouts.hero')
      @if ($flash = session('message'))
      <div id="flash-message" class="message is-success">
        <div class="message-header">
          <div class="container">
            {{ $flash }}
          </div>
        </div>
      </div>
      @endif
      @yield('content')
    </main>
    @include ('layouts.footer')
  </div>

  <flash message="{{ session('flash') }}"></flash>
  <!-- Scripts -->
  <script src="{{ mix('/js/app.js') }}"></script>
  <!-- <script src="//s3.amazonaws.com/scripts.hellobar.com/db5100bd0d00d770fd80b188dbabf1529f1e4ff7.js"></script> -->
</body>

</html>
