<div style="border-bottom: 1px solid #98002e;">
    <div class="container">
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="{{ route('home') }}">
                    <div style="">
                        <span style="font-family: 'Audiowide', cursive;font-size: 2.5rem;word-wrap:nowrap">Ga<span style="color: #980e0e">SPS</span></span>
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
                    <div class="navbar-item has-dropdown" :class="[aboutMenuOpen ? 'is-active' : '']">
                        <a @click="aboutMenuOpen = !aboutMenuOpen" class="navbar-link">
                            About
                        </a>
                        <div id="aboutDropdown" class="navbar-dropdown">
                            <a class="navbar-item" href="{{ route('about') }}">
                                About Us
                            </a>
                            <a class="navbar-item" href="{{ route('contact') }}">
                                Contact Information
                            </a>
                            <a class="navbar-item" href="{{ route('georgia-seow')}}">
                                Georgia SEOW
                            </a>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown" :class="[eccoMenuOpen ? 'is-active' : '']">
                        <a @click="eccoMenuOpen = !eccoMenuOpen" class="navbar-link">
                            New to Ecco
                        </a>
                        <div id="eccoDropdown" class="navbar-dropdown">
                            <a class="navbar-item" href="http://resources.ga-sps.org/resources/ecco-users-manual">
                                Users Manual w/ Progress Reporting
                            </a>
                            <a class="navbar-item" href="http://resources.ga-sps.org/resources/ecco-overview-using-brifecase">
                                Using Briefcase
                            </a>
                            <a class="navbar-item" href="http://resources.ga-sps.org/resources/ecco-overview-ta-entry-and-updates">
                                TA Entry and Updates
                            </a>
                            <a class="navbar-item" href="http://resources.ga-sps.org/resources/ecco-overview-entering-progress-level-data">
                                Entering Process Level Data
                            </a>
                            <a class="navbar-item" href="http://resources.ga-sps.org/resources/ecco-overview-adding-an-intervention-profile">
                                Adding an Intervention Profile
                            </a>
                            <a class="navbar-item" href="http://resources.ga-sps.org/resources/ecco-mds-data-entry-guidance-document">
                                ECCO MDS Data Entry Guidance Document
                            </a>
                        </div>
                    </div>
                    <a class="navbar-item" href="/#/spf-overview">SPF Overview</a>
                    <a class="navbar-item" href="/#/search">Resources</a>
                    <a class="navbar-item" href="/#/media">Media</a>
                    <a class="navbar-item" href="/#/training">Training</a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="button is-link" href="https://www.georgiamds.uga.edu/PublicHome/Index" target="new">MDS</a>
                        <a class="button is-link" href="http://gaspsdata.net/" target="new">GA Data Warehouse</a>
                    </div>

                    <div class="navbar-item">
                        <a href="http://ecco.ga-sps.org/login.php" target="_new" class="button is-info is-ecco">
                            Ecco v4.0 Sign In
                        </a>
                    </div>
                    @if (Auth::guest()) @else
                    <div class="navbar-item has-dropdown is-hoverable">
                        <div class="navbar-link">
                            {{ Auth::user()->name }}
                            <span class="caret"></span>
                        </div>
                        <div id="authDropdown" class="navbar-dropdown">
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
