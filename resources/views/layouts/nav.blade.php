<div style="border-bottom: 1px solid #98002e;">
    <div class="container">
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="{{ route('home') }}">
                    <div style="">
                        <span style="font-family: 'Audiowide', cursive;font-size: 2.5rem">Ga<span style="color: #980e0e">SPS</span></span>
                    </div>
                </a>

                <div class="navbar-burger burger" data-target="navMenuIndex">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu" id="navMenuIndex">
                <div class="navbar-start">
                </div>

                <div class="navbar-end">
                    @if (Auth::guest())
                        <a class="nav-item" href="{{ route('login') }}">Login</a>
                        <a class="nav-item" href="{{ route('register') }}">Register</a>
                    @else

                        {{--  <a class="navbar-item" href="/speakers">Speakers</a>
                        <a class="navbar-item" href="/speakers/add">Add Speakers</a>  --}}

                        <div class="navbar-item has-dropdown is-hoverable">
                            <div class="navbar-link">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </div>
                            <div id="moreDropdown" class="navbar-dropdown">
                                <a class="navbar-item" href="{{ route('profile', Auth::user()) }}">My Profile</a>
                                <a class="navbar-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </nav>
    </div>
</div>

