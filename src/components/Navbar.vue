<template>

    <!-- ======= Header ======= -->
    <header id="header" class="header d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1>ROMAX<span>.</span></h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
          <ul>
            <li><a :class="{active : $route.name == 'Home'}" class="nav-link " href="/" >Home</a></li>
            
            <li><a :class="{active : $route.name == 'About'}" href="/about">About Us</a></li>
            <li class="dropdown">
              <a href="#" :class="{active : $route.name == 'Properties1' || $route.name == 'Properties2' || $route.name == 'Properties3' || $route.name == 'Properties4' || $route.name == 'Property' }"
                ><span>Our Projects</span>
                <i class="bi bi-chevron-down dropdown-indicator"></i
              ></a>
              <ul>
                <li ><router-link to="/romax10" class="dropdown-item">Romax Homes 10</router-link></li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a :class="{active : $route.name == 'Contact'}" href="/contact">Contact Us</a></li>

          </ul>
        </nav>
        <!-- .navbar -->
    </div>
  </header><!-- End Header -->

        
    </template>

    <script>
    export default {
        name : 'Navbar',
    }
    </script>



