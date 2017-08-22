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

        <a class="nav-item" href="http://ecco.ga-sps.org/help.php" target="_blank">Upload Reports</a>

        <div class="navbar-item has-dropdown">
          <a class="navbar-link">
            Resources
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Overview
            </a>
            <a class="navbar-item">
              Elements
            </a>
            <a class="navbar-item">
              Components
            </a>
            <hr class="navbar-divider">
            <div class="navbar-item">
              Version 0.5.1
            </div>
          </div>
        </div>

        <router-link to="/spf-overview" class="nav-item">
          SPF Overview
        </router-link>

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
