<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="google" value="notranslate">
	<title>GaSPS - @yield('title')</title>
	<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons|Audiowide"> {{--
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> --}}
	<link rel="stylesheet" href="//maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css">
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<link href="/css/sps.css" rel="stylesheet">

	<!-- Scripts -->
	<script>
		window.App = {!! json_encode([
            'csrfToken' => csrf_token(),
            'user' => Auth::user(),
            'signedIn' => Auth::check()
        ])!!};
	</script>
	<style>
		[v-cloak] {
			display: none;
		}
	</style>
	@routes
</head>

<body>
	<div id="app">
		<main class="main">
			@include('layouts.nav') @yield('content')
		</main>
		@include('layouts.footer')
	</div>
	@include('partials.navbar-toggle-listener')
	<script src="{{ mix('/js/sps.js') }}"></script>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-76464598-1', 'auto');
    ga('send', 'pageview');
	</script>
	<script src="//s3.amazonaws.com/scripts.hellobar.com/db5100bd0d00d770fd80b188dbabf1529f1e4ff7.js"></script>
</body>

</html>
