<template>
  <div class="home">
        <!-- ======= Header ======= -->
        <header id="header" class="header d-flex align-items-center">
      <div
        class="
          container-fluid container-xl
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <a href="index.html" class="logo d-flex align-items-center">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <h1>ROMAX<span>.</span></h1>
        </a>

        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link active" href="/" >Home</a></li>
            <!-- <li><router-link to="/about">About Us</router-link></li> -->
            <li><a href="/about">About Us</a></li>
            <li class="dropdown">
              <a href="#"
                ><span>Our Projects</span>
                <i class="bi bi-chevron-down dropdown-indicator"></i
              ></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="projects.html">Contact Us</a></li>

          </ul>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
    <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero">

<div class="info d-flex align-items-center">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 text-center">
        <h2 data-aos="fade-down">Welcome to <br><span>ROMAX</span></h2>
        <p data-aos="fade-up">At Romax Properties we specialise in the development of residential buildings with the aim to construct luxury homes in cozy and functional estates so as to curb the housing deficit in Lagos and its environments..</p>
        <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a>
      </div>
    </div>
  </div>
</div>

<div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

  <div class="carousel-item active" style="background-image: url(assets/images/1.jpg); background-attachment: fixed;"></div>
  <div class="carousel-item" style="background-image: url(assets/images/6.jpg); background-attachment: fixed;"></div>
  <div class="carousel-item" style="background-image: url(assets/images/3.jpg); background-attachment: fixed;"></div>
  <div class="carousel-item" style="background-image: url(assets/images/4.jpg); background-attachment: fixed;"></div>
  <div class="carousel-item" style="background-image: url(assets/images/5.jpg); background-attachment: fixed;"></div>
  <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
  </a>

  <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
  </a>

</div>

</section><!-- End Hero Section -->

    <!-- ======= Get Started Section ======= -->
    <section id="get-started" class="get-started section-bg">
      <div class="container">

        <div class="row justify-content-between gy-4">

          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-up">
            <div class="content">
              <h3>Luxury Real Estate: <br>Redefined</h3>
              
              <p>At Romax Properties we specialise in the development of residential buildings with the aim to construct luxury homes in cozy and functional estates so as to curb the housing deficit in Lagos and its environments.</p>
            </div>
          </div>

          <div class="col-lg-5" data-aos="fade">
            <form class="php-email-form">
              <h3>Book A Survey</h3>
              <p>Schedule a survey now, come look around and see if there's anything you might like.</p>
              <div class="row gy-3">

                <div class="col-md-12">
                  <input type="text" name="name" class="form-control" placeholder="Name" required>
                </div>

                <div class="col-md-12 ">
                  <input type="email" class="form-control" name="email" placeholder="Email" required>
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="phone" placeholder="Phone" required>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your quote request has been sent successfully. Thank you!</div>

                  <button type="submit">Book Now</button>
                </div>

              </div>
            </form>
          </div><!-- End Quote Form -->

        </div>

      </div>
    </section><!-- End Get Started Section -->

    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2 class="text-capitalize">why choose us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsa?</p>
        </div>

        <div class="row gy-4">

          <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item  position-relative">
              <div class="icon">
                <i class="fa-solid fa-map-marker"></i>
              </div>
              <h3>Location</h3>
              <p>Our properties are located at prime areas which guarantees return on investment.</p>
              <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa-handshake"></i>
              </div>
              <h3>Trusted</h3>
              <p>We have been in business for over 16 years, for clients in diaspora you can trust us to deliver well finished homes.</p>
              <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa fa-money"></i>
              </div>
              <h3>Affordability</h3>
              <p>Our homes are very affordable, we have something for both the high & middle class earners with flexible payment plans.</p>
              <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa fa-signal"></i>
              </div>
              <h3>Amenities</h3>
              <p>Our estates comes with good road network, portable water, 24hrs light & round the clock security etc.</p>
              <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
            </div>
          </div><!-- End Service Item -->

        

        </div>

      </div>
    </section><!-- End Services Section -->
    
        <!-- ======= Constructions Section ======= -->
        <section id="constructions" class="constructions">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Projects</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, obcaecati.</p>
        </div>

        <div class="row gy-4">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="card-item">
              <div class="row">
                <div class="col-xl-5">
                  <div class="card-bg" style="background-image: url(assets/images/1.jpg);"></div>
                </div>
                <div class="col-xl-7 d-flex align-items-center">
                  <div class="card-body">
                    <h4 class="card-title">Romax Homes 12</h4>
                    <p class="text-uppercase" style="font-weight:bold; color:orange;">Quality Meets Affordability</p>
                    <p>A neighborhood of tastefully finished must-have homes specifically designed to match varying modern lifestyles with luxury living at an affordable price</p>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- End Card Item -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="card-item">
              <div class="row">
                <div class="col-xl-5">
                  <div class="card-bg" style="background-image: url(assets/images/6.jpg);"></div>
                </div>
                <div class="col-xl-7 d-flex align-items-center">
                  <div class="card-body">
                    <h4 class="card-title">Imperial Oak</h4>
                    <p class="text-uppercase" style="font-weight:bold; color:orange;">Comfort In Style</p>
                    <p>Built with the user’s comfort as the most important consideration, this unit offers maximum satisfaction for the owner.</p>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- End Card Item -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="card-item">
              <div class="row">
                <div class="col-xl-5">
                  <div class="card-bg" style="background-image: url(assets/images/5.jpg);"></div>
                </div>
                <div class="col-xl-7 d-flex align-items-center">
                  <div class="card-body">
                    <h4 class="card-title">Atlantic Ville</h4>
                    <p class="text-uppercase" style="font-weight:bold; color:orange;">Maximise Your Home Value</p>
                    <p>Each property boasts of excellent rental and resell value which indicates an excellent return rate for the buyer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- End Card Item -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="card-item">
              <div class="row">
                <div class="col-xl-5">
                  <div class="card-bg" style="background-image: url(assets/images/2.jpg);"></div>
                </div>
                <div class="col-xl-7 d-flex align-items-center">
                  <div class="card-body">
                    <h4 class="card-title">Romax Homes 10</h4>
                    <p class="text-uppercase" style="font-weight:bold; color:orange;">Live In Large</p>
                    <p>Each unit provides essential requirements for a contemporary family to live in style within affordable budget which in reality, is a gift.</p>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- End Card Item -->

        </div>

      </div>
    </section><!-- End Constructions Section -->
    

  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '../components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
  /*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.header {
  z-index: 997;
  position: absolute;
  padding: 30px 0;
  top: 0;
  left: 0;
  right: 0;
}

.header .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.header .logo h1 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0;
  font-family: var(--font-primary);
}

.header .logo h1 span {
  color: var(--color-primary);
}

/*--------------------------------------------------------------
# Desktop Navigation
--------------------------------------------------------------*/
@media (min-width: 1280px) {
  .navbar {
    padding: 0;
  }

  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navbar li {
    position: relative;
  }

  .navbar>ul>li {
    white-space: nowrap;
    padding: 10px 0 10px 28px;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
    font-family: var(--font-primary);
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar>ul>li>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: var(--color-primary);
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }

  .navbar a:hover:before,
  .navbar li:hover>a:before,
  .navbar .active:before {
    visibility: visible;
    width: 100%;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover>a {
    color: #fff;
  }

  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 28px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
  }

  .navbar .dropdown ul li {
    min-width: 200px;
  }

  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: var(--color-default);
    font-weight: 400;
  }

  .navbar .dropdown ul a i {
    font-size: 12px;
  }

  .navbar .dropdown ul a:hover,
  .navbar .dropdown ul .active:hover,
  .navbar .dropdown ul li:hover>a {
    color: var(--color-primary);
  }

  .navbar .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  .navbar .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }
}

@media (min-width: 1280px) and (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

@media (min-width: 1280px) {

  .mobile-nav-show,
  .mobile-nav-hide {
    display: none;
  }
}

/*--------------------------------------------------------------
# Mobile Navigation
--------------------------------------------------------------*/
@media (max-width: 1279px) {
  .navbar {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    max-width: 400px;
    bottom: 0;
    transition: 0.3s;
    z-index: 9997;
  }

  .navbar ul {
    position: absolute;
    inset: 0;
    padding: 50px 0 10px 0;
    margin: 0;
    background: rgba(0, 0, 0, 0.8);
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    font-family: var(--font-primary);
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    text-transform: uppercase;
    transition: 0.3s;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover>a {
    color: #fff;
  }

  .navbar .dropdown ul,
  .navbar .dropdown .dropdown ul {
    position: static;
    display: none;
    padding: 10px 0;
    margin: 10px 20px;
    transition: all 0.5s ease-in-out;
    border: 1px solid #222428;
  }

  .navbar .dropdown>.dropdown-active,
  .navbar .dropdown .dropdown>.dropdown-active {
    display: block;
  }

  .mobile-nav-show {
    position: relative;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    z-index: 9999;
    padding-right: 10px;
  }

  .mobile-nav-hide {
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 9999;
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .navbar {
    right: 0;
  }

  .mobile-nav-active .navbar:before {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9996;
  }
}

</style>