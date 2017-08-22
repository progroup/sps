<div class="container">
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-burger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-start">

        <router-link class="navbar-item" to="/">Home</router-link>

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

        <!-- <a class="nav-item" href="http://ecco.ga-sps.org/help.php" target="_blank">Upload Reports</a> -->

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
        </b-dropdown> -->

        <!-- <router-link to="/spf-overview" class="nav-item">
          SPF Overview
        </router-link> -->

        <router-link to="/faqs" class="nav-item">
          FAQs
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <b-field>
            <b-input placeholder="Search..." type="search" icon="search">
            </b-input>
            <p class="control">
              <button class="button is-primary">Search</button>
            </p>
          </b-field>
        </div>
      </div>
    </div>
  </nav>
</div>
