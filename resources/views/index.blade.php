<!DOCTYPE html>
<html lang="{{  app()->getLocale() }}">

<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-Language" content="{{ app()->getLocale() }}">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="google" value="notranslate">

	<title>GaSPS - @yield('title')</title>

	<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons|Audiowide">
	<link rel="stylesheet" href="//maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css">
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

	<!-- Scripts -->
	<script type="text/javascript">
		window.__INITIAL_STATE__ = {!! json_encode([
			'program' =>  $program ?? '',
		]) !!};

		window.App = {!! json_encode([
			'csrfToken' => csrf_token(),
			'user' => Auth::user(),
			'signedIn' => Auth::check()
		])!!};
	</script>
	<link href="/css/tailwind.css" rel="stylesheet">
	<script src="{{ mix('/js/main.js') }}" defer></script>
</head>

<body>
	<div id="app"></div>
	@include('partials.navbar-toggle-listener')
	{{-- <script src="//s3.amazonaws.com/scripts.hellobar.com/db5100bd0d00d770fd80b188dbabf1529f1e4ff7.js"></script> --}}
</body>

</html>
