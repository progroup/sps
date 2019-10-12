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
  <style>
    [v-cloak] { display: none; }
  </style>
  @routes
</head>

<body>
<div class="hero-banner">
    <img src="http://www.steveschoger.com/img/hero-banner.jpg"/>
</div>


<p class="field">
    <a class="button is-link" href="/resources">
        <span class="icon">
            @svg('book-reference')
        </span>
        <span>Library</span>
    </a>
    <a class="button is-link">
        <span class="icon">
             @svg('calendar')
        </span>
        <span>Calendar</span>
    </a>
    <a class="button is-link" href="/training">
        <span class="icon">
            @svg('education')
        </span>
        <span>Training</span>
    </a>
    <a class="button is-link" href="/help">
        <span class="icon">
            @svg('buoy')
        </span>
        <span>Help</span>
    </a>
</p>


<a class="navbar-item" href="/settings">
    <span class="icon">@svg('show-sidebar', 'mr-1')</span>
    <span>Show Sidebar</span>
</a>

<a class="navbar-item" href="/settings">
    @svg('stethoscope', 'mr-1') Makegood
</a>

<a class="navbar-item" href="/settings">
    @svg('tag', 'mr-1') Tag
</a>





<ul class="grid-container">
    <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" class="heroicon-book heroicon heroicons-lg"><path fill="#FFFFFF" d="M89 75H15v10h10v4h-9a5 5 0 0 1-5-5V6a5 5 0 0 1 5-5h73v74zM39 85h50v4H39v-4z" class="heroicon-book-cover heroicon-component-fill"></path> <path fill="#980E0E" d="M25 71V1h-9a5 5 0 0 0-5 5v69l4-4h10z" class="heroicon-book-binding heroicon-component-accent heroicon-component-fill"></path> <rect width="72" height="10" x="15" y="75" fill="#FFFFFF" class="heroicon-book-pages heroicon-component-fill"></rect> <polygon fill="#980E0E" points="24 77 40 77 40 99 32 95 24 99" class="heroicon-book-bookmark heroicon-component-accent heroicon-component-fill"></polygon> <path fill="#000000" d="M11 75.99A4.99 4.99 0 0 1 16 71h73v4h-2v10h2v4H39v-7H25v7h-9a5 5 0 0 1-5-4.99v-8.02z" opacity=".2" class="heroicon-shadows"></path> <path fill="#4A4A4A" fill-rule="nonzero" d="M24 90h-8a6 6 0 0 1-6-6V6A6 6 0 0 1 16 0h74v76h-2v8h2v6H40v10l-8-4-8 4V90zM88 2H20v66h-1V2h-2v66h-1V2a4 4 0 0 0-4 4.01v65.52A5.97 5.97 0 0 1 16 70h72V2zM16 72a4 4 0 0 0-4 4V84A4 4 0 0 0 16 88h8v-2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h72v-2H16zm24 16h48v-2H40v2zm0-4h46v-1H40v1zm0-2h46v-1H58v-1h28v-2H40v4zm-2-4H26v18.76l6-3 6 3V78zm-14 0h-6v-1h68v-1H16v8h8v-6zm0-76h2v68h-2V2zm18 18h31v2H41v-2h1zm3 5h24v2H45v-2z" class="heroicon-outline"></path></svg>
    </li>
    <li>grid item</li>
    <li>grid item</li>
</ul>

<!-- See https://www.bram.us/2017/07/30/vertical-marginspaddings-and-flexbox-a-quirky-combination/-->
<h1>Flexbox + Aspect Ratio Boxes</h1>
<div class="row">
  <div class="cell">
    <div class="aspectratio" data-ratio="16:9">
      <div>
        <p>16:9</p>
      </div>
    </div>
  </div>
  <div class="cell">
    <div class="aspectratio" data-ratio="16:9">
      <div>
        <p>16:9</p>
      </div>
    </div>
  </div>
  <div class="cell">
    <div class="aspectratio" data-ratio="16:9">
      <div>
        <p>16:9</p>
      </div>
    </div>
  </div>
  <div class="cell">
    <div class="aspectratio" data-ratio="16:9">
      <div>
        <p>16:9</p>
      </div>
    </div>
  </div>
</div>

<div style="display:flex">
    <article class="read-next-card" style="background-image: url(/assets/images/pexels-photo-241307.jpeg)">
        <header class="read-next-card-header">
            <small class="read-next-card-header-sitetitle">— Developing Thoughts —</small>
            <h3 class="read-next-card-header-title">
                <a href="/tag/functional-programming/">functional programming</a>
            </h3>
        </header>
        <div class="read-next-divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5"></path>
            </svg>
        </div>
        <div class="read-next-card-content">
            <ul>
                <li>
                    <a href="/what-the-functor/">What the Functor?</a>
                </li>
                <li>
                    <a href="/curried-functions-and-point-free-programming/">Curried Functions and Point-Free Programming</a>
                </li>
            </ul>
        </div>
        <footer class="read-next-card-footer">
            <a href="/tag/functional-programming/">See all 2 posts →</a>
        </footer>
    </article>
    <article class="post-card post">
        <a class="post-card-image-link" href="/what-the-functor/">
            <div class="post-card-image" style="background-image: url(/assets/images/pexels-photo-241307.jpeg"></div>
        </a>
        <div class="post-card-content">
            <a class="post-card-content-link" href="/what-the-functor/">
                <header class="post-card-header">
                    <span class="post-card-tags">functional programming</span>
                    <h2 class="post-card-title">What the Functor?</h2>
                </header>
                <section class="post-card-excerpt">
                    <p>A week ago I wrote an article on implementing Maybes in JavaScript, and while it was generally well received, it did draw some (well justified) criticism from some commenters. Specifically, there are some</p>
                </section>
            </a>
            <footer class="post-card-meta">
                <span class="post-card-author">
                    <a href="/author/alex/">Alex Young</a>
                </span>
            </footer>
        </div>
    </article>
    <article class="post-card post">
        <a class="post-card-image-link" href="/live-data-with-firebase-and-redux-saga/">
            <div class="post-card-image" style="background-image: url(/assets/images/pexels-photo-196416.jpeg)"></div>
        </a>
        <div class="post-card-content">
            <a class="post-card-content-link" href="/live-data-with-firebase-and-redux-saga/">
                <header class="post-card-header">
                    <span class="post-card-tags">react</span>
                    <h2 class="post-card-title">Live data with Firebase and redux-saga</h2>
                </header>
                <section class="post-card-excerpt">
                    <p>Firebase is a backend-as-a-service offering from Google that aims to provide some of the common server-side functionality usually created for apps. Firebase provides a JSON-based key:value database which has a pretty nifty</p>
                </section>
            </a>
            <footer class="post-card-meta">
                <span class="post-card-author">
                    <a href="/author/alex/">Alex Young</a>
                </span>
            </footer>
        </div>
    </article>
</div>
</body>
</html>
