<div style="border-bottom: 1px solid #98002e; background: #e7e7e7">
    <div class="container">
        <nav class="navbar is-transparent" style="background: #e7e7e7">
          <div class="navbar-brand">
            <div class="navbar-burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="navbar-menu" id="navMenu">
            <div class="navbar-start">

              <a class="navbar-item" href="/topics">Topics</a>
              <a class="navbar-item" href="/faqs">FAQs</a>

              <b-dropdown hoverable>
                <a class="navbar-item" slot="trigger">
                  <span>About</span>
                  <b-icon icon="arrow_drop_down"></b-icon>
                </a>

                <b-dropdown-item has-link>
                  <router-link to="/about-us">
                    About Us
                  </router-link>
                </b-dropdown-item>

                <b-dropdown-item has-link>
                  <router-link to="/contact-information">
                    Contact Information
                  </router-link>
                </b-dropdown-item>

                <b-dropdown-item has-link>
                  <router-link to="/georgia-seow">
                    Georgia SEOW
                  </router-link>
                </b-dropdown-item>
              </b-dropdown>

              <a class="nav-item" href="http://ecco.ga-sps.org/help.php" target="_blank">Upload Reports</a>

              <!-- <b-dropdown hoverable>
                <a class="navbar-item" slot="trigger">
                  <span>Resources</span>
                  <b-icon icon="arrow_drop_down"></b-icon>
                </a>
                <b-dropdown-item has-link>
                  <router-link :to="{ path: '/resources', params: { id: 123 }}">
                    Introduction to App
                  </router-link>
                  <router-link to="/resources">
                    Webinars
                  </router-link>
                  <router-link to="/resources">
                    Tools
                  </router-link>
                  <router-link to="/resources">
                    Stategic Prevention Framework
                  </router-link>
                  <router-link to="/resources">
                    App Strategies
                  </router-link>
                  <router-link to="/resources">
                    Suicide Prevention
                  </router-link>
                  <router-link to="/resources">
                    GENRx
                  </router-link>
                  <router-link to="/resources">
                    Admin
                  </router-link>
                  <router-link to="/resources">
                    Evaluation
                  </router-link>
                </b-dropdown-item>
              </b-dropdown>

              <router-link to="/spf-overview" class="nav-item">
                SPF Overview
              </router-link>

              <a href="/faqs/create" class="nav-item">
                Answer Question
              </a>
            </div>

            <div class="navbar-end">
              <!-- Authentication Links -->
              @if (Auth::guest())
                <a class="nav-item" href="{{ route('login') }}">Login</a>
                <a class="nav-item" href="{{ route('register') }}">Register</a>
              @else
                <a href="#" data-toggle="dropdown" role="button" aria-expanded="false">
                  {{ Auth::user()->name }} <span class="caret"></span>
                </a>
                <a href="{{ route('logout') }}"
                  onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
              @endif
            </div>
          </div>
        </nav>
      </div>
</div>
